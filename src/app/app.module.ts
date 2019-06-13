import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AgmCoreModule
} from '@agm/core';
import { TagInputModule } from 'ngx-chips';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { HelloComponent } from './components/trainerprofile/hello.component';
import { RegisterComponent } from './components/register/register.component';
import { CorporatesComponent } from './components/corporates/corporates.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';
import { TrainerprofileComponent, CertificationCreateComponent,SkillCreateComponent } from './components/trainerprofile/trainerprofile.component';
import { TagInputComponent } from './shared/tag-input/tag-input.component';
@NgModule({

  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ComponentsModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatChipsModule,
  MatIconModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatTabsModule,
  MatSelectModule,
  TagInputModule,
  MatDialogModule,
  NgbModule,
    RouterModule,
//    AdminLayoutModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CertificationCreateComponent,
    SkillCreateComponent,
    AdminLayoutComponent,
    HelloComponent,
    TrainerprofileComponent,
    TagInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
