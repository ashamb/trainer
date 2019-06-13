import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';


import { TrainerprofileComponent, MatConfirmDialogComponent } from './trainerprofile.component';
import { HelloComponent } from './hello.component';
import { TagInputComponent } from '../../shared/tag-input/tag-input.component';

import { CertificationCreateComponent ,SkillCreateComponent} from './trainerprofile.component';
import { TrainerProfileRoutingModule } from './trainerprofile.routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
    MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
    MatButtonToggleModule,
  
      MatSelectModule } from '@angular/material';
import { TagInputModule } from 'ngx-chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

    TrainerProfileRoutingModule,
FormsModule,
MatFormFieldModule,
ReactiveFormsModule,
TagInputModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
MatChipsModule,MatAutocompleteModule,
MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
MatButtonToggleModule,MatSelectModule,
MatDialogModule,MatStepperModule,
CommonModule
  ],
  exports:[

    TrainerProfileRoutingModule,
FormsModule,
TagInputModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
MatChipsModule,MatAutocompleteModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
  MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule,MatSelectModule,MatStepperModule,
  
  MatDialogModule,
CommonModule
  ],
  declarations: [ TrainerprofileComponent,HelloComponent,TagInputComponent, CertificationCreateComponent , SkillCreateComponent,  MatConfirmDialogComponent],
  entryComponents: [CertificationCreateComponent,SkillCreateComponent ,MatConfirmDialogComponent]
})
export class TrainerProfileModule { }
