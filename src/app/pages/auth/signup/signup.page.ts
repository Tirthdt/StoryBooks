import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authForm } from "../authForm";
import { AuthService } from "../../../services/auth.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  authForm: FormGroup;

  constructor(private auth: AuthService, private loading: LoadingController, private router: Router, private alert: AlertController) {
    this.authForm = authForm;
   }

  ngOnInit() {
  }

  signup(){
    this.loading.create({
      message: "Signing Up.."
    }).then((loader) => {
      loader.present();
      return this.auth.signup(this.authForm.value);
    }).then(() => {
      this.authForm.reset()
      this.loading.dismiss();
      this.router.navigate(["feed"]);
    }).catch((err) => {
      console.log(err);
      if(err.code === "auth/email-already-in-use"){
        this.loading.dismiss();
        this.authForm.reset();
        this.presentAlert("Email Present", "The email is already in use by another account.");
      }
      else{
        this.loading.dismiss();
        this.authForm.reset();
        this.presentAlert("Unknown Error", "Something went wrong. Please try after some time.");
      }
    })
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
