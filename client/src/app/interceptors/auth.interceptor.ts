import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../api.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const apiService = inject(ApiService);
  const token = apiService.getToken();

  const isAuthRequest =
    req.url.includes('/users/login') ||
    req.url.includes('/users/register');

  if (!isAuthRequest && token) {
    req = req.clone({
      setHeaders: {
        'X-Authorization': token
      }
    });
  }

  return next(req);
};
