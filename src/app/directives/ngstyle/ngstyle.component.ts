import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-ngstyle',
    templateUrl: './ngstyle.component.html',
    styleUrls: ['./ngstyle.component.css'],
    standalone: true,
    imports: [NgStyle],
})
export class NgstyleComponent {
  @Input() color = 'lightgreen';
}
