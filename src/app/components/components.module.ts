import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, BigCardComponent, SmallCardComponent],
  imports: [FormsModule, CommonModule, RouterModule],
  exports: [NavbarComponent, BigCardComponent, SmallCardComponent],
})
export class ComponentsModule {}
