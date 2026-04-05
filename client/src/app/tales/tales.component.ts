import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';
import { ApiService } from '../api.service';
import { TravelTale } from '../types/tale';

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
    this.apiService.getAll().subscribe((tale: TravelTale[]) => {
      console.log(tale);
      
      this.tales = tale;
    });
  }

}
