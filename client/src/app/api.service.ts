import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { map, Observable } from 'rxjs';
import { TravelTale } from './types/tale';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  
  getAll(): Observable<TravelTale[]> {
      const {apiUrl} = environment;
      return this.http.get<{ [key: string]: TravelTale }>(`${apiUrl}/jsonstore/travelTales`).pipe(map(res => Object.values(res)));
  }

  getById(id: string): Observable<TravelTale> {
      const {apiUrl} = environment;
      return this.http.get<TravelTale>(`${apiUrl}/jsonstore/travelTales/${id}`);
  }
}
