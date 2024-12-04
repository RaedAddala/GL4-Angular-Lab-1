import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import {BehaviorSubject, catchError, combineLatest, map, Observable, of, tap} from "rxjs";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
  providers: [DatePipe],
})
export class CvComponent {
   // Filtered CVs based on the tab selected
  selectedTab$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  cvs$ = this.cvService.getCvs().pipe(

    catchError(() => {
      this.toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );
  filteredCvs$: Observable<any[]>=combineLatest([this.cvs$, this.selectedTab$]).pipe(
    map(([cvs, selectedTab]) => {
      return cvs.filter((cv: Cv) => {
        return selectedTab ? cv.age < 40 : cv.age >= 40;
      });
    }),

  );

  selectedCv$ = this.cvService.selectCv$.pipe(
    catchError(() => of(null))
  );

  date$ = of(new Date()).pipe(
    map((date) => this.datePipe.transform(date, 'fullDate')?.toUpperCase())
  );
  switchTab(selectedTab: boolean) {
    this.selectedTab$.next(selectedTab);
  }

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
