import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedtoLogin = () => redirectUnauthorizedTo(["auth-page"]);
const redirectLoggedInto = () => redirectLoggedInTo(["feed"]);

const routes: Routes = [
  {
    path: "home",
    ...canActivate(redirectLoggedInto),
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
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
    path: "feed",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/feed/feed.module").then((m) => m.FeedPageModule),
  },
  {
    path: "story-detail/:id",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/story-detail/story-detail.module").then(
        (m) => m.StoryDetailPageModule
      ),
  },
  {
    path: "favourites",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/favourites/favourites.module").then(
        (m) => m.FavouritesPageModule
      ),
  },
  {
    path: "profile",
    ...canActivate(redirectUnauthorizedtoLogin),
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "auth-page",
    ...canActivate(redirectLoggedInto),
    loadChildren: () =>
      import("./pages/auth-page/auth-page.module").then(
        (m) => m.AuthPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
