import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authForm } from "../authForm";
import { AuthService } from "../../../services/auth.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  constructor(private auth: AuthService, private loading: LoadingController, private router: Router, private alert: AlertController) {
    this.authForm = authForm;
   }

  ngOnInit() {
  }

  login(){
    this.loading.create({
      message: "Logging In.."
    }).then((loader) => {
      loader.present();
      return this.auth.login(this.authForm.value);
    }).then(() => {
      this.authForm.reset()
      this.loading.dismiss();
      this.router.navigate(["feed"]);
    }).catch((err) => {
      console.log(err);
      if(err.code === "auth/user-not-found"){
        this.loading.dismiss();
        this.authForm.reset();
        this.presentAlert("User not found", "There is no user found for that email. Please signup.");
      }
      else if(err.code === "auth/wrong-password"){
        this.loading.dismiss();
        this.authForm.reset();
        this.presentAlert("Password Mismatch!!", "The password you have entered is wrong. Please check the password and try again.");
      }
      else{
        this.loading.dismiss();
        this.authForm.reset();
        this.presentAlert("Unknown Error", "Something went wrong. Please try after some time.");
      }
    });
  }

  async presentAlert(header, message){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  public get email() : any {
    return this.authForm.get("email");
  }

  public get password() : any {
    return this.authForm.get("password");
  }

}
