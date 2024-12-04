import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CvService } from './cv.service';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvResolver implements Resolve<Cv[]> {

  constructor(private cvService: CvService) {}

  resolve(): Observable<Cv[]> {
    return this.cvService.getCvs().pipe(
      catchError((error) => {
        console.error('Error fetching CVs:', error);
        return of(this.cvService.getFakeCvs());
      })
    );
  }



}