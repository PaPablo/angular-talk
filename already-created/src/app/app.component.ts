import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "already-created";

  click() {
    let a = 1;
    const b = 2;
    a += b;
    console.log(`Ahora a vale ${a}`);
  }
}
