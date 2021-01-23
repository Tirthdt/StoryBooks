import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
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
    private storyService: StoryService
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

  ionViewWillLeave() {
    if (this.liked === "fas fa-heart") {
      this.storyService.markFavourite(this.storyId);
    } else {
      this.storyService.removeFromFavourite(this.storyId);
    }
  }
}
