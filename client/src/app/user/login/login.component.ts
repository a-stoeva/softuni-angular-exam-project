import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private apiService: ApiService){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  handleLogin(): void {
    if (this.loginForm.invalid) {
      alert('Invalid form')
      return;
    }

    const data = this.loginForm.value as {
      email:string;
      password: string;
    };

    this.apiService.login(data).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify({
          _id: user._id,
          email: user.email,
          accessToken: user.accessToken
        }));

        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Something went wrong'}`);
      }
    });
  }
}
