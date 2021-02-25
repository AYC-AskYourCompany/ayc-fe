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
import { CompanyComponent } from './profile-button/settings/company/company.component';
import { CreateCompanyDialogComponent } from './profile-button/settings/company/create-company-dialog/create-company-dialog.component';
import { CompanyContainerComponent } from './profile-button/settings/company/company-container/company-container.component';
import { DetailCompanyDialogComponent } from './profile-button/settings/company/detail-company-dialog/detail-company-dialog.component';
import { DetailCompanyInformationContainerComponent } from './profile-button/settings/company/detail-company-dialog/detail-company-information-container/detail-company-information-container.component';
import { DetailCompanyInformationCompanyMemberComponent } from './profile-button/settings/company/detail-company-dialog/detail-company-information-company-member/detail-company-information-company-member.component';
import { DetailCompanyDeleteComponent } from './profile-button/settings/company/detail-company-dialog/detail-company-delete/detail-company-delete.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SettingsComponent,
    PersonalDataComponent,
    OptionalDataComponent,
    ProfileButtonComponent,
    ProfilePictureComponent,
    CompanyComponent,
    CreateCompanyDialogComponent,
    CompanyContainerComponent,
    DetailCompanyDialogComponent,
    DetailCompanyInformationContainerComponent,
    DetailCompanyInformationCompanyMemberComponent,
    DetailCompanyDeleteComponent,
  ],
  imports: [
    CommonModule,
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
