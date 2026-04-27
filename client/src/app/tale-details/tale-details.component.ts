import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { TravelTale } from '../types/tale';
import { SentenseCasePipe } from '../pipes/sentense-case.pipe';

@Component({
  selector: 'app-tale-details',
  standalone: true,
  imports: [RouterLink, SentenseCasePipe],
  templateUrl: './tale-details.component.html',
  styleUrl: './tale-details.component.css'
})
export class TaleDetailsComponent {

  tale: TravelTale | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  get isOwner(): boolean {
    if (!this.tale) return false;
    return this.apiService.isOwner(this.tale._ownerId);
  }

  deleteTale(): void {

    if (!this.tale) return;

    this.apiService.deleteTale(this.tale._id).subscribe({
      next: () => {
        this.router.navigate(['/tales']);
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['taleId'];
    this.apiService.getById(id).subscribe({
      next: (t) => {
        this.tale = t;
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
        this.router.navigate(['/tales']);
      }
    });
  }

}
