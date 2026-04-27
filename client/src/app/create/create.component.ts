import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('createForm') form: NgForm | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  createTale(): void {

    const form = this.form;

    if (!form || form.invalid) {
      alert('Invalid form!');
      return;
    }

    this.apiService.createTale(form.value).subscribe({
      next: () => {
        this.router.navigate(['/tales']);
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'create failed'}`);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/tales']);
  }

}
