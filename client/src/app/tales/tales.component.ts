import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';
import { TravelTale } from '../types/tale';
import { ApiService } from '../api.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './tales.component.html',
  styleUrl: './tales.component.css'
})
export class TalesComponent implements OnInit{

  tales: TravelTale[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAll().pipe(
      catchError((err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
        return of([]);
      })
    ).subscribe((tale: TravelTale[]) => this.tales = tale);
  }

}
