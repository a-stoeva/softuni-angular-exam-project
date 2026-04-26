import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../api.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  if (apiService.isLogged()) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
