import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openSlider: any;
  getClass() {
    if (this.openSlider === undefined) {
      return 'set-left';
    } else {
      return this.openSlider ? 'move-to-right' : 'move-to-left';
    }
  }
}
