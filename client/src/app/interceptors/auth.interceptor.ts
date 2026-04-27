import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = authService.getToken();

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
