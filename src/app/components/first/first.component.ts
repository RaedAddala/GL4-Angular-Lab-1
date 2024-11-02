import { Component } from '@angular/core';
import { SecondComponent } from '../second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    standalone: true,
    imports: [SecondComponent],
})
export class FirstComponent {
  name = 'aymen';
  message = '';
  isHidden = false;
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  constructor() {
    /*     setInterval(() => {

    }, 1000); */
  }
}
