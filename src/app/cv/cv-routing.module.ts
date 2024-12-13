import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { AuthGuard } from "../auth/guards/auth.guard";
import { CvResolver } from './services/CvResolver';
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {ListComponent} from "./list/list.component";
import {ItemComponent} from "./item/item.component";
import {CvCardComponent} from "./cv-card/cv-card.component";
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {MasterDetailsCvComponent} from "./master-details-cv/master-details-cv.component";
import {CardProfilComponent} from "../components/card-profil/card-profil.component";
import {EmbaucheComponent} from "./embauche/embauche.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule} from "@angular/common";

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
  declarations: [
    DefaultImagePipe,
    AddCvComponent,
    CvComponent,
    DetailsCvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    AutocompleteComponent,
    MasterDetailsCvComponent,
    CardProfilComponent,
    EmbaucheComponent,
    CardProfilComponent,
  ],
  imports: [
    RouterModule.forChild(routes), FormsModule, ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
