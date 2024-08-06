import { Component, Input } from '@angular/core';
import { Car } from '../../data/car.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() car?: Car;
}
