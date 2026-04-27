import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild('registerForm') form: NgForm | undefined;

  constructor(private router: Router, private authService: AuthService){}

  register(): void {

    const registerForm = this.form;

    if (!registerForm || registerForm?.invalid) {
      alert('Invalid form')
      return;
    }

    const { email, password, rePassword } = registerForm?.value;

    if (password !== rePassword) {
      alert(`Password and repeat password don't match`)
      return;
    }

    const data = { email, password } as {email: string, password:string};

    this.authService.register(data).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify({
          _id: user._id,
          email: user.email,
          accessToken: user.accessToken
        }));

        this.router.navigate(['/home']);
      },

      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Register failed'}`);
      }
    });
    
  }

}
