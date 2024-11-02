import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class TwoComponent {
  two = 'init value';
}
