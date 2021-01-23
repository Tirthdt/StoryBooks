import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthService } from "./auth.service";
import { Story } from "../models/story";
import { map, switchMap, tap } from "rxjs/operators";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(
    private angularFireStore: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private auth: AuthService
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

  markFavourite(storyId: string) {
    const userId = this.auth.user || localStorage.getItem("userId");
    this.db.database
      .ref(`${userId}/likedStories`)
      .once("value")
      .then((stories) => {
        console.log(stories);
        if (stories.val()) {
          const likedStories: any[] = Object.values(stories.val());
          console.log(stories.val());
          // console.log(likedStories);

          if (!likedStories.includes(storyId)) {
            return this.db.database.ref(`${userId}/likedStories`).push(storyId);
          }
        } else {
          return this.db.database.ref(`${userId}/likedStories`).set([storyId]);
        }
      });
  }

  removeFromFavourite(storyId: string) {
    const userId = this.auth.user || localStorage.getItem("userId");
    this.db.database
      .ref(`${userId}/likedStories`)
      .once("value")
      .then((stories) => {
        const likedStories: any[] = Object.values(stories.val());
        console.log("removing");
        const filterArray = likedStories.filter((story) => {
          return story !== storyId;
        });
        return this.db.database.ref(`${userId}/likedStories`).set(filterArray);
      });
  }

  async likedStories(): Promise<any[]> {
    console.log("liked");
    const userId = this.auth.user || localStorage.getItem("userId");
    const stories = await (
      await this.db.database.ref(`${userId}/likedStories`).once("value")
    ).val();
    console.log(stories);
    if (stories) {
      return Object.values(stories);
    }
    return [];
  }
}
