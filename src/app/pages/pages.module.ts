import { NgModule } from '@angular/core';
import { DataSheetComponent } from './data-sheet/data-sheet.component';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [DataSheetComponent, IndexComponent],
  imports: [ComponentsModule, FormsModule, CommonModule, RouterModule],
  exports: [DataSheetComponent, IndexComponent],
})
export class PagesModule {}
