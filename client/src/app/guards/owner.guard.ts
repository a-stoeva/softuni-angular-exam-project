import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

export const ownerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const dataService = inject(DataService);
  const router = inject(Router);

  const taleId = route.params['taleId'];

  return dataService.getById(taleId).pipe(
    map(tale => {
      if (authService.isOwner(tale._ownerId)) {
        return true;
      }

      router.navigate([`/tales/${taleId}/details`])
      return false;
    })
  );
};
