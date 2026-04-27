import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelTale } from '../types/tale';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

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

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {

    const id: string = this.route.snapshot.params['taleId'];
      
    this.dataService.getById(id).subscribe((t: TravelTale) => {
      this.tale = t;     
    });
  }

  editTale(): void {

    const form = this.form;

    if (!form || form.invalid) {
      alert('Invalid form')
      return;
    }

    const id: string = this.route.snapshot.params['taleId'];

    this.dataService.updateTale(id, this.tale).subscribe({
      next: () => {
        this.router.navigate([`/tales/${id}/details`]);
      },
      error: (err) => {
        alert(`Error status ${err.status}: ${err.error?.message || 'Edit failed'}`);
      }
    });
  }

  cancel(): void {
    const id = this.route.snapshot.params['taleId'];
    this.router.navigate([`tales/${id}/details`]);
  }

}
