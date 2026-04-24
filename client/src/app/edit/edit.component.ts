import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelTale } from '../types/tale';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  @ViewChild('editForm') form: NgForm | undefined;
  tale!: TravelTale;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    const id = this.route.snapshot.params['taleId'];

    console.log(id);
      
    this.apiService.getById(id).subscribe(t => {
      this.tale = t;
      console.log(t);      
    });
  }

  editTale(): void {

    const form = this.form!;

    if (form.invalid) {
      return;
    }

    const id = this.route.snapshot.params['taleId'];

    this.apiService.updateTale(id, this.tale).subscribe(() => {
      this.router.navigate([`/tales`]);
    });
  }

  cancel(): void {
    this.router.navigate(['/tales']);
  }

}
