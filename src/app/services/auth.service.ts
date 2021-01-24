import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userId: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private auth: AngularFireAuth,
    private angularfire: AngularFirestore
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userId.next(user.uid);

        localStorage.setItem("userId", user.uid);
      } else {
        this.userId.next(null);
        if (localStorage.getItem("userId")) {
          localStorage.removeItem("userId");
        }
      }
    });
  }

  getUserInfo() {
    return this.angularfire
      .collection("Users")
      .doc(this.user || localStorage.getItem("userId"))
      .valueChanges()
      .pipe(tap(console.log));
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
    return this.auth.signOut();
  }
}
