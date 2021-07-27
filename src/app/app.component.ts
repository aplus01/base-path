import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <img src="../assets/emoji.png" />
      <img src="/base-path/assets/emoji.png" />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "base-path";
}
