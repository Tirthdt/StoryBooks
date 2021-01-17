import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userId: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userId.next(user.uid);
        localStorage.setItem("userId", user.uid);
        console.log("user logged in");
      } else {
        this.userId.next(null);
        if (localStorage.getItem("userId")) {
          localStorage.removeItem("userId");
        }
        console.log("user logged out");
      }
    });
  }

  public get user(): string {
    return this.userId.value;
  }

  signup({ email, password }) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signout() {
    this.auth.signOut();
  }
}