import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Story } from "../../models/story";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"],
})
export class FeedPage implements OnInit {
  public stories$: Observable<any[]>;

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    autoplay: true,
  };

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.stories$ = this.storyService.getAllStories();
  }
}
