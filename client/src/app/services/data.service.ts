import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelTale } from '../types/tale';
import { environment } from '../../environments/environment.development';
import { Like } from '../types/like';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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

  deleteTale(id: string): Observable<void> {
    const { apiUrl } = environment;
    return this.http.delete<void>(`${apiUrl}/data/travelTales/${id}`);
  }

  getLikes(taleId: string): Observable<Like[]> {
    const { apiUrl } = environment;
    const query = encodeURIComponent(`taleId="${taleId}"`);
    return this.http.get<Like[]>(`${apiUrl}/data/likes?where=${query}`);
  }

  likeTale(taleId: string): Observable<Like> {
    const { apiUrl } = environment;
    return this.http.post<Like>(`${apiUrl}/data/likes`, { taleId });
  }
}
