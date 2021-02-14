import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { StoryService } from "../services/story.service";
import { finalize, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 200,
    autoplay: true,
    loop: true,
  };

  constructor() {}
}
