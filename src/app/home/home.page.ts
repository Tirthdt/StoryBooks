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
  task: AngularFireUploadTask;
  percentage$: Observable<any>;
  snapshot$: Observable<any>;
  uploadedFileUrl: string;
  images: Observable<any>;

  fileName: string;
  fileSize: number;

  isUploading: boolean;
  isUploaded: boolean;

  constructor(
    private auth: AuthService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private story: StoryService
  ) {
    this.isUploading = false;
    this.isUploaded = false;
  }

  uploadFile(event: File) {
    console.log("here");
    const file = event["0"];
    console.log(file);
    if (file.type.split("/")[0] !== "image") {
      console.log("Not a valid file type");
      return;
    }

    this.isUploading = true;
    this.isUploaded = false;

    this.fileName = file.name;

    const path = `storyImages/${new Date().getTime()}_${this.fileName}`;

    const fileRef = this.storage.ref(path);

    this.task = this.storage.upload(path, file);

    this.percentage$ = this.task.percentageChanges();
    console.log("Here before snapshot changes");
    this.snapshot$ = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        console.log("Finalizing");
        this.uploadedFileUrl = await fileRef.getDownloadURL().toPromise();
        console.log(this.uploadedFileUrl);
        this.addStory({
          title: "Yes",
          description: "This works",
          imageUrl: this.uploadedFileUrl,
          imagePath: path,
        });
      })
    );
  }

  addStory(story) {
    this.db
      .collection("Story")
      .add(story)
      .then(() => {
        console.log("story added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openFileSelector() {
    document.getElementById("uploadBtn").click();
  }

  signout() {
    this.auth.signout();
  }

  markFavourite() {
    this.story.markFavourite("abc");
  }

  removeFavourite() {
    this.story.removeFromFavourite("abc");
  }
}
