import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { StoryService } from "../../services/story.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-add-story",
  templateUrl: "./add-story.page.html",
  styleUrls: ["./add-story.page.scss"],
})
export class AddStoryPage implements OnInit {
  file: any = null;
  storyImage = null;
  storyForm: FormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    description: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(40),
    ]),
    story: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
  });

  constructor(
    private storyService: StoryService,
    private authService: AuthService,
    private loading: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    this.loading
      .create({
        message: "Adding the story...",
      })
      .then((loader) => {
        return loader.present();
      })
      .then(() => {
        this.storyService.addStory({
          ...this.storyForm.value,
          image: this.file,
          authorid: this.authService.user,
        });
      })
      .then(() => {
        console.log("story uploaded successfully");
        this.storyImage = null;
        this.storyForm.reset();
        this.loading.dismiss();
        this.router.navigate(["", "feed"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openFileSelector() {
    document.getElementById("uploadBtn").click();
  }

  previewFile(selectedFile) {
    this.file = selectedFile["0"];
    if (selectedFile && selectedFile["0"]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.storyImage = event.target.result;
      };
      reader.readAsDataURL(selectedFile[0]);
    }
  }

  public get title(): any {
    return this.storyForm.get("title");
  }

  public get description(): any {
    return this.storyForm.get("description");
  }

  public get story(): any {
    return this.storyForm.get("story");
  }
}
