import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { AuthGuard } from "../auth/guards/auth.guard";
import { CvResolver } from './services/CvResolver';

const routes: Routes =[
    {
      path: '',
      component: CvComponent,
      resolve: {
        cvs: CvResolver, 
      },
    },
    { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
    { path: ':id', component: DetailsCvComponent },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}