import {Component, inject, Signal, WritableSignal} from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../model/cv';

import { ItemComponent } from '../item/item.component';

@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: true,
    imports: [
    ItemComponent
],
})
export class EmbaucheComponent {
  private embaucheService = inject(EmbaucheService);

  public embauchees:WritableSignal<Cv[]>=this.embaucheService.embauchees;
  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    // this.embauchees = this.embaucheService.embauchees;
  }



  /** Inserted by Angular inject() migration for backwards compatibility */


}
