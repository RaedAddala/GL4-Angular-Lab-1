import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
@NgModule({
  declarations: [CvComponent, AddCvComponent, DetailsCvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule,
    AppModule,
  ],
})
export class CvModule {}
