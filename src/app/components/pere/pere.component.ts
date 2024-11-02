import { Component } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';

@Component({
    selector: 'app-pere',
    templateUrl: './pere.component.html',
    styleUrls: ['./pere.component.css'],
    standalone: true,
    imports: [FilsComponent],
})
export class PereComponent {
  onSendMessageToDad(message: string) {
    alert(message);
  }
}
