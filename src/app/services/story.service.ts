import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Story } from "../models/story";
import { map, switchMap, tap } from "rxjs/operators";
import * as firebase from "firebase/app";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(
    private angularFireStore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  addStory(story: Story) {
    const path = `StoryImages/${new Date().getTime()}_${story.image.name}`;
    const url = this.storage.ref(path);

    return this.storage
      .upload(path, story.image)
      .then((res) => {
        return url.getDownloadURL().toPromise();
      })
      .then((downloadedUrl) => {
        return this.angularFireStore.collection("Stories").add({
          title: story.title,
          description: story.description,
          authorId: story.authorid,
          story: story.story,
          imageUrl: downloadedUrl,
          imagePath: path,
          likes: 0,
          createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
        });
      });
  }

  getAllStories() {
    return this.angularFireStore
      .collection("Stories")
      .snapshotChanges()
      .pipe(
        map((snaps) => {
          return snaps.map((snap) => {
            const id = snap.payload.doc.id;
            const data = snap.payload.doc.data();
            return { ...(data as Story), id };
          });
        })
      );
  }

  getStory(id: string) {
    return this.angularFireStore
      .collection("Stories")
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((snap) => {
          const id = snap.payload.id;
          const data = snap.payload.data();
          return { id, ...(data as any) };
        }),
        switchMap((story: any) => {
          return this.angularFireStore
            .collection("Users")
            .doc(story.authorId)
            .get()
            .pipe(
              map((data) => {
                return { ...(data.data() as any), ...story };
              })
            );
        })
      );
  }

  updateLike(id: string, likes: number, toggle: string) {
    return this.angularFireStore
      .collection("Stories")
      .doc(id)
      .update({
        likes: toggle === "increase" ? likes + 1 : likes - 1,
      });
  }
}
