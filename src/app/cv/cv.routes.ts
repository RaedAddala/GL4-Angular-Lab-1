import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { authGuard } from '../auth/guards/auth.guard';

export const CV_ROUTES: Routes = [
  { path: '', component: CvComponent },
  { path: 'add', component: AddCvComponent, canActivate: [authGuard] },
  { path: ':id', component: DetailsCvComponent },
];
