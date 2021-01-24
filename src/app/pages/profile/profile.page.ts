import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  user$: Observable<any>;
  stories$: Observable<any>;

  constructor(private auth: AuthService, private storyService: StoryService) {}

  ngOnInit() {
    this.user$ = this.auth.getUserInfo();
    this.stories$ = this.storyService.getStoryForUser();
  }
}
