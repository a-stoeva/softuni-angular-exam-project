import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

    login(data: { email: string; password: string }): Observable<User> {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/login`, data);
  }

  register(data: { email: string; password: string }): Observable<User> {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/register`, data);
  }

  logout(): Observable<void> {
    const { apiUrl } = environment;
    return this.http.get<void>(`${apiUrl}/users/logout`);
  }

  getUser(): User | null {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }

  getToken(): string | null {
    return this.getUser()?.accessToken || null;
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  isOwner(ownerId: string): boolean {
    const user = this.getUser();
    return !!user && user._id === ownerId;
  }
}
