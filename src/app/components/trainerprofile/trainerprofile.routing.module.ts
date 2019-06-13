import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerprofileComponent, CertificationCreateComponent ,SkillCreateComponent} from './trainerprofile.component';

const routes: Routes = [
  {
    path: 'trainerprofile',
    component: TrainerprofileComponent,
    data: {
      title: 'corporates'
    }
  },
  {
    path: 'createcertification',
    component: CertificationCreateComponent
  },
  {
    path: 'createskill',
    component: SkillCreateComponent
  },
  {
    path: '',
    redirectTo: 'trainerprofile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

// exports: [RouterModule]
})
export class TrainerProfileRoutingModule {}
