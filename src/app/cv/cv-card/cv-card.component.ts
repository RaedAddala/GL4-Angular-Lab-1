import { Component, Input, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

import { RouterLink } from '@angular/router';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-cv-card',
    templateUrl: './cv-card.component.html',
    styleUrls: ['./cv-card.component.css'],
    standalone: true,
    imports: [
    RouterLink,
    DefaultImagePipe
],
})
export class CvCardComponent {
  private embaucheService = inject(EmbaucheService);
  private toastr = inject(ToastrService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
  @Input() cv: Cv | null = null;

  ngOnInit() {}
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embauche(this.cv)) {
        this.toastr.success(
          `${this.cv?.firstname} ${this.cv?.name} a été pré embauché`
        );
      } else {
        this.toastr.warning(
          `${this.cv?.firstname} ${this.cv?.name} est déjà pré embauché`
        );
      }
    }
  }
}
