import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild('registerForm') form: NgForm | undefined;

  constructor(private router: Router, private apiService: ApiService){}

  register(): void {

    const registerForm = this.form;

    if (registerForm?.invalid) {
      return;
    }

    const { email, password, rePassword } = registerForm?.value;

    if (password !== rePassword) {
      return;
    }

    const data = {
      email,
      password
    };

    this.apiService.register(data).subscribe((user) => {
        localStorage.setItem('user', JSON.stringify({
          _id: user._id,
          email: user.email,
          accessToken: user.accessToken
        }));
        this.router.navigate(['/home']);
      });
    
    }

}
