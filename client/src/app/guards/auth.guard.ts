import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  if (apiService.isLogged()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
