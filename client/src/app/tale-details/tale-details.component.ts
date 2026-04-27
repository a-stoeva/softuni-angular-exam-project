import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TravelTale } from '../types/tale';
import { SentenseCasePipe } from '../pipes/sentense-case.pipe';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tale-details',
  standalone: true,
  imports: [RouterLink, SentenseCasePipe],
  templateUrl: './tale-details.component.html',
  styleUrl: './tale-details.component.css'
})
export class TaleDetailsComponent {

  tale: TravelTale | null = null;

  likes: number = 0;
  hasLiked: boolean = false;
  isGuest: boolean = true;
  isAuthor: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {}

  get isOwner(): boolean {
    if (!this.tale) return false;
    return this.authService.isOwner(this.tale._ownerId);
  }

  deleteTale(): void {

    if (!this.tale) return;

    this.dataService.deleteTale(this.tale._id).subscribe({
      next: () => {
        this.router.navigate(['/tales']);
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      }
    });
  }

  likeHandler(): void {

    const user = this.authService.getUser();

    if (!user) {
      alert('Please log in to like!');
      return;
    }

    if (this.hasLiked || this.isAuthor || !this.tale) return;

    this.dataService.likeTale(this.tale._id).subscribe({
      next: () => {
        this.likes++;
        this.hasLiked = true;
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['taleId'];
    const user = this.authService.getUser();

    if (!id) {
      this.router.navigate(['/tales']);
      alert('Tale not found')
      return;
    }

    this.isGuest = !user;

    this.dataService.getById(id).subscribe({
      next: (t) => {
        this.tale = t;
        this.isAuthor = !!user && this.tale?._ownerId === user?._id;
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Details page failed'}`);
        this.router.navigate(['/tales']);
      }
    });

    this.dataService.getLikes(id).subscribe({
      next: (allLikes) => {
        this.likes = allLikes.length;
        if (user) {
          this.hasLiked = allLikes.some(l => l._ownerId === user._id);
        }
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      }
    });
  }

}
