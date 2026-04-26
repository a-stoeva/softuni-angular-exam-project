import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { map } from 'rxjs';

export const ownerGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);

  const taleId = route.params['taleId'];

  return apiService.getById(taleId).pipe(
    map(tale => {
      if (apiService.isOwner(tale._ownerId)) {
        return true;
      }

      router.navigate([`/tales/${taleId}/details`])
      return false;
    })
  );
};
