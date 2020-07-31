import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "first",
    loadChildren: () =>
      import("./first/first.module").then((m) => m.FirstModule),
  },
  {
    path: "second",
    loadChildren: () =>
      import("./second/second.module").then((m) => m.SecondModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
