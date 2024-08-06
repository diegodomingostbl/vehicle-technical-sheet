import { Component, OnInit } from '@angular/core';
import { Car } from '../../data/car.interface';
import { dataFake } from '../../data/dataFake';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  cars: Car[] = [];
  mainCar?: Car;

  constructor(private router: Router) {
    this.mainCar = dataFake.find((x) => x.id === 1);
    this.cars = dataFake.filter((x) => x.id !== 1);
  }

  ngOnInit(): void {}

  redirectTo(id: number) {
    this.router.navigate(['/datasheet/' + id]);
  }
}
