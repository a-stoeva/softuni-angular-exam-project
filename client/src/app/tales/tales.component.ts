import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';
import { TravelTale } from '../types/tale';
import { catchError, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './tales.component.html',
  styleUrl: './tales.component.css'
})
export class TalesComponent implements OnInit{

  tales: TravelTale[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getAll().pipe(
      catchError((err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
        return of([]);
      })
    ).subscribe((tale: TravelTale[]) => this.tales = tale);
  }

}
