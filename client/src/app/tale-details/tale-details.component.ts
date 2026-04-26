import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { TravelTale } from '../types/tale';

@Component({
  selector: 'app-tale-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tale-details.component.html',
  styleUrl: './tale-details.component.css'
})
export class TaleDetailsComponent {

    tale!: TravelTale;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  get isOwner(): boolean {
    return this.apiService.isOwner(this.tale?._ownerId);
  }

  deleteTale(): void {
    this.apiService.deleteTale(this.tale._id).subscribe(() => {
      this.router.navigate(['/tales']);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['taleId'];
    console.log(id);
    this.apiService.getById(id).subscribe(t => {
      this.tale = t});
  }

}
