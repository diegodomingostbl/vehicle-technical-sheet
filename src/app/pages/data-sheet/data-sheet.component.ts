import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../data/car.interface';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-data-sheet',
  templateUrl: './data-sheet.component.html',
  styleUrl: './data-sheet.component.css',
})
export class DataSheetComponent implements OnInit {
  car?: Car;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let carId = Number(params.get('id'));

      this.car = dataFake.find((x) => x.id === carId);

      if (!this.car) {
        this.router.navigate(['/home']);
      }
    });
  }
}
