import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ColorComponent } from '../../components/color/color.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'color', component: ColorComponent }],
  },
];
