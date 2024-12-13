import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
} from '@angular/forms';
import { of } from 'rxjs';
import {  map,  catchError } from 'rxjs/operators';
import { CvService } from '../services/cv.service';
import {inject, Injectable} from '@angular/core';
@Injectable({
  providedIn:"root"
}
)
export class cinAsyncValidator implements AsyncValidator {
  cvService = inject(CvService);
  validate(control: AbstractControl) {
    if (!control.value) {
      return of(null);
    }
    return this.cvService.selectByProperty('cin', control.value).pipe(

      map((cvs) => (cvs.length === 0 ? null : { cinTaken: true })),
      catchError(() => of(null))
    );

  }
}
