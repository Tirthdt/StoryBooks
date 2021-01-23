import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.page.html",
  styleUrls: ["./favourites.page.scss"],
})
export class FavouritesPage implements OnInit {
  public likedStories$: Observable<any[]>;

  constructor(private storyService: StoryService) {}

  async ngOnInit() {
    this.likedStories$ = await this.storyService.getLikedStories();
  }
}
