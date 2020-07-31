import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <div class="row">
        <div class="col-4">
          <nav>
            <div>
              <button class="btn btn-primary btn-block" routerLink="first">First</button>
            </div>
            <br>
            <div>
              <button class="btn btn-primary btn-block" routerLink="second">
                Second
              </button>
            </div>
          </nav>
        </div>
        <div class="col-8">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "learnform";
}
