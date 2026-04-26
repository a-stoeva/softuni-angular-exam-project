import { Component, Input } from '@angular/core';
import { TravelTale } from '../types/tale';
import { RouterLink } from '@angular/router';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { SentenseCasePipe } from '../pipes/sentense-case.pipe';

@Component({
  selector: 'app-tale',
  standalone: true,
  imports: [RouterLink, ShortenPipe, SentenseCasePipe],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {
  @Input() tale!: TravelTale;
}
