import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { authForm } from "./authForm";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.page.html",
  styleUrls: ["./auth-page.page.scss"],
})
export class AuthPagePage implements OnInit {
  selectedForm: string = "signup";

  signupForm: FormGroup = authForm;
  loginForm: FormGroup = authForm;

  constructor(
    private auth: AuthService,
    private loading: LoadingController,
    private router: Router,
    private alert: AlertController,
    private db: AngularFirestore
  ) {
    // this.signupForm = authForm;
    this.signupForm.addControl(
      "name",
      new FormControl(null, [Validators.required])
    );
  }

  ngOnInit() {}

  signup() {
    this.loading
      .create({
        message: "Signing Up..",
        cssClass: "loadingClass",
      })
      .then((loader) => {
        loader.present();
        return this.auth.signup(this.signupForm.value);
      })
      .then((res) => {
        console.log(res.user.uid);
        this.db.collection("Users").doc(res.user.uid).set({
          Name: this.signupForm.value["name"],
        });
        this.signupForm.reset();
        this.loading.dismiss();
        this.router.navigate(["feed"]);
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "auth/email-already-in-use") {
          this.loading.dismiss();
          this.signupForm.reset();
          this.presentAlert(
            "Email Present",
            "The email is already in use by another account."
          );
        } else {
          this.loading.dismiss();
          this.signupForm.reset();
          this.presentAlert(
            "Unknown Error",
            "Something went wrong. Please try after some time."
          );
        }
      });
  }

  login() {
    this.loading
      .create({
        message: "Logging In..",
        cssClass: "loadingClass",
      })
      .then((loader) => {
        loader.present();
        return this.auth.login(this.loginForm.value);
      })
      .then(() => {
        this.loginForm.reset();
        this.loading.dismiss();
        this.router.navigate(["feed"]);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          this.loading.dismiss();
          this.loginForm.reset();
          this.presentAlert(
            "User not found",
            "There is no user found for that email. Please signup."
          );
        } else if (err.code === "auth/wrong-password") {
          this.loading.dismiss();
          this.loginForm.reset();
          this.presentAlert(
            "Incorrect Password!!",
            "The password you have entered is wrong. Please check the password and try again."
          );
        } else {
          this.loading.dismiss();
          this.loginForm.reset();
          this.presentAlert(
            "Unknown Error",
            "Something went wrong. Please try after some time."
          );
        }
      });
  }

  segmentChanged(event) {
    if (this.selectedForm === "signup") {
      this.loginForm.reset();
    } else {
      this.signupForm.reset();
    }
    this.selectedForm = event.detail.value;
  }

  async presentAlert(header, message) {
    const alert = await this.alert.create({
      header,
      message,
      cssClass: "alertClass",
      buttons: ["OK"],
    });
    await alert.present();
  }

  public get email(): any {
    if (this.selectedForm === "signup") {
      return this.signupForm.get("email");
    } else {
      return this.loginForm.get("email");
    }
  }

  public get password(): any {
    if (this.selectedForm === "signup") {
      return this.signupForm.get("password");
    } else {
      return this.loginForm.get("password");
    }
  }

  public get name(): any {
    return this.signupForm.get("name");
  }
}
