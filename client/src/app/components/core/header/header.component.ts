import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthService) {}

  get isLogged(): boolean {
    return this.authService.isLogged();
  }

  logout(): void {
    this.authService.logout().subscribe({
    next: () => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  });
  }

}
