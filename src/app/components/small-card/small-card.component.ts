import { Component, Input } from '@angular/core';
import { Car } from '../../data/car.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() car?: Car;
}
