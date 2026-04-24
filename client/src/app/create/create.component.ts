import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

    const form = this.form!;

    if (form?.invalid) {
      return;
    }

    this.apiService.createTale(form.value).subscribe(() => {
      this.router.navigate(['/tales']);
    });
  }

  cancel(): void {
    this.router.navigate(['/tales']);
  }

}
