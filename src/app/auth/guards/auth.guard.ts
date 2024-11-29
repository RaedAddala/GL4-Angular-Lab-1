import { inject } from '@angular/core';
import {
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { APP_ROUTES } from '../../../config/routes.config';


export const authGuard = (): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree([APP_ROUTES.login]);
  }

  return true;
};
