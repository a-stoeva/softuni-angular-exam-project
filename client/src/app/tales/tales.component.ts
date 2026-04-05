import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './tales.component.html',
  styleUrl: './tales.component.css'
})
export class TalesComponent implements OnInit{

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAll().subscribe(p => {
      console.log(p);
      
    })
  }

}
