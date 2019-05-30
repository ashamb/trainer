import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TrainersComponent, MatConfirmDialogComponent } from './trainers.component';

import { TrainerCreateComponent } from './trainers.component';
import { TrainersRoutingModule } from './trainers.routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
    MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
    MatButtonToggleModule,
  
      MatSelectModule } from '@angular/material';
      import {MatStepperModule} from '@angular/material/stepper';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

    TrainersRoutingModule,
FormsModule,
MatFormFieldModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
MatButtonToggleModule,MatSelectModule,
MatDialogModule,MatStepperModule,
CommonModule
  ],
  exports:[

    TrainersRoutingModule,
FormsModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
  MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule,MatSelectModule,MatStepperModule,
  MatDialogModule,
CommonModule
  ],
  declarations: [ TrainersComponent, TrainerCreateComponent,  MatConfirmDialogComponent],
  entryComponents: [TrainerCreateComponent,MatConfirmDialogComponent]
})
export class TrainersModule { }
