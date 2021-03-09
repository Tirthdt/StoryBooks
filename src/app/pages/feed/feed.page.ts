import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { StoryService } from "../../services/story.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"],
})
export class FeedPage implements OnInit {
  public stories$: Observable<any[]>;
  public recentStories$: Observable<any[]>;

  slideOpts = {
    initialSlide: 0,
    speed: 200,
    autoplay: true,
  };

  constructor(
    private storyService: StoryService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.stories$ = this.storyService.getAllStories();
    this.recentStories$ = this.storyService.getRecentStories();
  }

  signout() {
    this.authService.signout().then(() => {
      this.router.navigate(["", "auth-page"]);
    });
  }
}
