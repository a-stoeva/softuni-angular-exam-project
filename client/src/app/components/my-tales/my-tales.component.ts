import { Component } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';
import { catchError, of } from 'rxjs';
import { TravelTale } from '../../types/tale';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './my-tales.component.html',
  styleUrl: './my-tales.component.css'
})
export class MyTalesComponent {

  tales: TravelTale[] = [];

  constructor(private dataService: DataService, private authService: AuthService){}

  ngOnInit(): void {
    const user = this.authService.getUser();

    if (!user) {
      return;
    }

    this.dataService.getAll().pipe(
      catchError(err => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
        return of([]);
      })
      ).subscribe((tale: TravelTale[]) => {
        this.tales = tale.filter(t => t._ownerId === user._id);
      });
  }

}
