import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CorporatesComponent, MatConfirmDialogComponent } from './corporates.component';

import { CorporateCreateComponent } from './corporates.component';
import { CorporatesRoutingModule } from './corporates.routing.module';
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

    CorporatesRoutingModule,
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

    CorporatesRoutingModule,
FormsModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
  MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule,MatSelectModule,MatStepperModule,
  MatDialogModule,
CommonModule
  ],
  declarations: [ CorporatesComponent, CorporateCreateComponent,  MatConfirmDialogComponent],
  entryComponents: [CorporateCreateComponent,MatConfirmDialogComponent]
})
export class CorporatesModule { }
