import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../../config/routes.config';
import { AuthService } from '../../auth/services/auth.service';
import { catchError, of, Subject, switchMap, tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit, OnDestroy {
  private deleteSubject = new Subject<Cv>();
  private unsubscribe$ = new Subject<void>();

  $cv = this.activatedRoute.params.pipe(
    switchMap((params) => this.cvService.getCvById(+params['id'])),
    catchError(() => {
      this.toastr.error('Problème lors de la récupération du CV');
      this.router.navigate([APP_ROUTES.cv]);
      return of(null);
    })
  );

  deleteResult$ = this.deleteSubject.pipe(
    switchMap((cv) => {
      if (!cv) {
        return of(null);
      }
      return this.cvService.deleteCvById(cv.id).pipe(
        tap(() => {
          this.toastr.success(`${cv.name} supprimé avec succès`);
          this.router.navigate([APP_ROUTES.cv]);
        }),
        catchError(() => {
          this.toastr.error(`Problème avec le serveur, veuillez contacter l'admin`);
          return of(null);
        })
      );
    })
  );

  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.$cv.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (cv) => {
        if (cv) {
          console.log('CV details:', cv);
        } else {
          console.log('No CV found.');
        }
      },
      error: (error) => {
        console.error('Error fetching CV:', error);
      },
    });

    this.deleteResult$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result) => {
          if (result) {
            console.log('CV deleted successfully');
          } else {
            console.log('CV deletion failed or was canceled');
          }
        },
        error: (error) => {
          console.error('Error during CV deletion:', error);
        },
      });
  }

  onDelete(cv: Cv) {
    console.log('Deleting CV:', cv);
    this.deleteSubject.next(cv);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
