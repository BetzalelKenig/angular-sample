import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstModule } from "./first/first.module";
import { SecondModule } from './second/second.module';
import { HomeComponent } from './home/home/home.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ],
  imports: [BrowserModule, AppRoutingModule, FirstModule, SecondModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
