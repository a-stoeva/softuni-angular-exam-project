import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  logout(): void {
    this.apiService.logout().subscribe(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

}
