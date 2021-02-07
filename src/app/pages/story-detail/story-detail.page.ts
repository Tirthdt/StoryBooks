import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-story-detail",
  templateUrl: "./story-detail.page.html",
  styleUrls: ["./story-detail.page.scss"],
})
export class StoryDetailPage implements OnInit {
  stories$: Observable<any[]>;
  liked = "far fa-heart";
  private storyId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storyService: StoryService,
    public auth: AuthService,
    private alert: AlertController
  ) {
    this.storyId = this.route.snapshot.paramMap.get("id");
  }

  async ngOnInit() {
    this.stories$ = this.storyService.getStory(this.storyId);
    const stories = await this.storyService.likedStories();

    if (stories && stories.includes(this.storyId)) {
      this.liked = "fas fa-heart";
    }
  }

  triggerLike(likes: number, id: string) {
    this.storyService.updateLike(
      id,
      likes,
      this.liked === "far fa-heart" ? "increase" : "decrease"
    );
    this.liked =
      this.liked === "fas fa-heart" ? "far fa-heart" : "fas fa-heart";
  }

  edit() {
    this.router.navigate(["", "add-story"], {
      queryParams: {
        id: this.storyId,
        edit: "true",
      },
    });
  }

  delete(path) {
    console.log(path);
    this.alert
      .create({
        header: "Confirm",
        message: "Are you sure you want to delete this story?",
        buttons: [
          {
            role: "cancel",
            text: "No",
          },
          {
            text: "Yes",
            handler: () => {
              this.storyService.deleteStory(path, this.storyId).then(() => {
                this.router.navigate(["", "feed"]);
              });
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  ionViewWillLeave() {
    if (this.liked === "fas fa-heart") {
      this.storyService.markFavourite(this.storyId);
    } else {
      this.storyService.removeFromFavourite(this.storyId);
    }
  }
}
