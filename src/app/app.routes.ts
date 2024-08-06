import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DataSheetComponent } from './pages/data-sheet/data-sheet.component';

export const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent,
    pathMatch: 'full',
  },
  {
    path: 'datasheet/:id',
    component: DataSheetComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
