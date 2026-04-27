import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TravelTale } from '../../types/tale';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { SentenseCasePipe } from '../../pipes/sentense-case.pipe';

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
