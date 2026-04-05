import { Component, Input } from '@angular/core';
import { TravelTale } from '../types/tale';

@Component({
  selector: 'app-tale',
  standalone: true,
  imports: [],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {
  @Input() tale!: TravelTale;
}
