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
    return this.http.post<TravelTale>(`${apiUrl}/jsonstore/travelTales`, data);
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
    return this.http.put<TravelTale>(`${apiUrl}/jsonstore/travelTales/${id}`, data);
}
  
}
