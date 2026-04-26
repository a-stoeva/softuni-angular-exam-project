import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { map, Observable } from 'rxjs';
import { TravelTale } from './types/tale';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<TravelTale[]> {
    const { apiUrl } = environment;
    return this.http.get<TravelTale[]>(`${apiUrl}/data/travelTales`);
  }

  getById(id: string): Observable<TravelTale> {
    const {apiUrl} = environment;
    return this.http.get<TravelTale>(`${apiUrl}/data/travelTales/${id}`);
  }

  createTale(data: {
    img: string;
    title: string;
    country: string;
    city: string;
    cost: string;
    timeNeeded: string;
    bestTimeToVisit: string;
    myExperiance: string;
    valuableTips: string;
  }): Observable<TravelTale> {
    const { apiUrl } = environment;
    return this.http.post<TravelTale>(`${apiUrl}/data/travelTales`, data);
  }

  updateTale(id: string, data: {
    img: string;
    title: string;
    country: string;
    city: string;
    cost: string;
    timeNeeded: string;
    bestTimeToVisit: string;
    myExperiance: string;
    valuableTips: string;
    }): Observable<TravelTale> {
      const { apiUrl } = environment;
      return this.http.put<TravelTale>(`${apiUrl}/data/travelTales/${id}`, data);
  }

  login(data: { email: string; password: string }) {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/users/login`, data);
  }

  register(data: { email: string; password: string }) {
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
  
}
