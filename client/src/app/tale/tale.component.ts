import { Component, Input } from '@angular/core';
import { TravelTale } from '../types/tale';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tale',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {
  @Input() tale!: TravelTale;
}
