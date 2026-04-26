import { Component } from '@angular/core';
import { TravelTale } from '../types/tale';
import { ApiService } from '../api.service';
import { TaleComponent } from '../tale/tale.component';

@Component({
  selector: 'app-my-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './my-tales.component.html',
  styleUrl: './my-tales.component.css'
})
export class MyTalesComponent {

  tales: TravelTale[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    const user = this.apiService.getUser();

    if (!user) {
      return;
    }

    this.apiService.getAll().subscribe((tale: TravelTale[]) => {
      this.tales = tale.filter(t => t._ownerId === user._id);
    });
  }

}
