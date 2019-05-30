import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporatesComponent, CorporateCreateComponent } from './corporates.component';

const routes: Routes = [
  {
    path: 'corporates',
    component: CorporatesComponent,
    data: {
      title: 'corporates'
    }
  },
  {
    path: 'create',
    component: CorporateCreateComponent
  },
  {
    path: '',
    redirectTo: 'corporates',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

// exports: [RouterModule]
})
export class CorporatesRoutingModule {}
