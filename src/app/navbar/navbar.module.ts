import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { SettingsComponent } from './profile-button/settings/settings.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { PersonalDataComponent } from './profile-button/settings/personal-data/personal-data.component';
import { OptionalDataComponent } from './profile-button/settings/optional-data/optional-data.component';
import { ProfilePictureComponent } from './profile-button/settings/profile-picture/profile-picture.component';
import { AngularMaterial } from '../utils/angular-material';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SettingsComponent,
    PersonalDataComponent,
    OptionalDataComponent,
    ProfileButtonComponent,
    ProfilePictureComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SettingsComponent,
    PersonalDataComponent,
    OptionalDataComponent,
    ProfileButtonComponent,
    ProfilePictureComponent,
  ]
})
export class NavbarModule { }
