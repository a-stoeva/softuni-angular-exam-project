import { Component } from '@angular/core';
import { TaleComponent } from '../tale/tale.component';

@Component({
  selector: 'app-tales',
  standalone: true,
  imports: [TaleComponent],
  templateUrl: './tales.component.html',
  styleUrl: './tales.component.css'
})
export class TalesComponent {

}
