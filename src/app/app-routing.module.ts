import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedtoLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInto = () => redirectLoggedInTo(["feed"]);

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "add-story",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/add-story/add-story.module").then(
        (m) => m.AddStoryPageModule
      ),
  },
  {
    path: "signup",
    ...canActivate(redirectLoggedInto),
    loadChildren: () =>
      import("./pages/auth/signup/signup.module").then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: "login",
    ...canActivate(redirectLoggedInto),
    loadChildren: () =>
      import("./pages/auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "feed",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/feed/feed.module").then((m) => m.FeedPageModule),
  },
  {
    path: "story-detail/:id",
    loadChildren: () =>
      import("./pages/story-detail/story-detail.module").then(
        (m) => m.StoryDetailPageModule
      ),
  },
  {
    path: "favourites",
    loadChildren: () =>
      import("./pages/favourites/favourites.module").then(
        (m) => m.FavouritesPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
