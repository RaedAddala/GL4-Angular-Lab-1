import {Component, inject} from '@angular/core';
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";
import {Router, RouterOutlet} from "@angular/router";
import {catchError, Observable, of} from "rxjs";
import {Cv} from "../model/cv";
import {AppModule} from "../../app.module";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-master-details-cv',

  templateUrl: './master-details-cv.component.html',
  styleUrl: './master-details-cv.component.css'
})
export class MasterDetailsCvComponent {

  private cvService = inject(CvService);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  cvs : Observable<Cv[]> | undefined;
  selectedCv : Cv | undefined;

  constructor() {
    // Ajouter catchErrror dans la pipe
    this.cvs =  this.cvService.getCvs().pipe(
      catchError( (e) => {
        console.log('we are in error');
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      })
    );

  }

}
