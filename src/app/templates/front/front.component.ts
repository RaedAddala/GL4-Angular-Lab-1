import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArcEnCielDirective } from '../../directives/arc-en-ciel.directive';

@Component({
    selector: 'app-front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.css'],
    standalone: true,
    imports: [RouterOutlet,ArcEnCielDirective]
})
export class FrontComponent {

}
