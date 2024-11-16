import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { catchError, map, of } from "rxjs";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
  providers: [DatePipe],
})
export class CvComponent {

  cvs$ = this.cvService.getCvs().pipe(
    catchError(() => {
      this.toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );

  selectedCv$ = this.cvService.selectCv$.pipe(
    catchError(() => of(null))
  );

  date$ = of(new Date()).pipe(
    map((date) => this.datePipe.transform(date, 'fullDate')?.toUpperCase())
  );

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private datePipe: DatePipe
  ) {
    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
}
