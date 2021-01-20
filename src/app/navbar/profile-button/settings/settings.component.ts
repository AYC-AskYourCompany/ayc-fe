import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Skills } from '../../../models/forms/skills';
import { PersonalDataService } from './services/personal-data.service';
import { OptionalDataService } from './services/optional-data.service';
import { PersonalData } from '../../../models/user/personal-data';
import { ToasterService } from 'angular2-toaster';
import { PopUpConst } from '../../../shared/const/pop-up-const';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  username: string;
  personalData: PersonalData;
  personalDataFormGroup: FormGroup;
  optionalDataFormGroup: FormGroup;
  optionalDataSkills: Skills[] = [];

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toasterService: ToasterService,
              private personalDataService: PersonalDataService,
              private optionalDataService: OptionalDataService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
    this.initializePersonalDataForm();
    this.initializeOptionalDataForm();
    this.setValuesOfForms();
  }

  setOptionalDataSkills(skills: Skills[]): void {
    this.optionalDataSkills = skills;
  }

  savePersonalData(): void {
    this.personalDataService.saveUserData(this.personalDataFormGroup.getRawValue())
      .subscribe(personalData =>
        this.toasterService.pop('success', PopUpConst.PERSONAL_DATA_SUCCESS_TITLE, PopUpConst.PERSONAL_DATA_SUCCESS_BODY)
      );
  }

  saveOptionalData(): void {
    this.optionalDataFormGroup.get('skills').setValue(this.optionalDataSkills);
    this.optionalDataService.saveOptionalData(this.optionalDataFormGroup.getRawValue())
      .subscribe(optionalData =>
        this.toasterService.pop('success', PopUpConst.OPTIONAL_DATA_SUCCESS_TITLE, PopUpConst.OPTIONAL_DATA_SUCCESS_BODY)
      );
  }

  private initializePersonalDataForm(): void {
    this.personalDataFormGroup = this.fb.group({
      username: [this.authService.getUsername(), Validators.required],
      email: [this.authService.getEmail(), Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    this.personalDataFormGroup.controls.username.disable();
    this.personalDataFormGroup.controls.email.disable();
  }

  private initializeOptionalDataForm(): void {
    this.optionalDataFormGroup = this.fb.group({
      companyId: [''],
      skills: [''],
      professionalPosition: [''],
      personalDescription: ['']
    });
  }

  private setValuesOfForms(): void {
    this.personalDataService.getUserData().subscribe(
      personalData => {
        if (personalData) {
          const clonedPersonalData = Object.assign({}, personalData);
          delete clonedPersonalData.optionalData;

          this.optionalDataFormGroup.setValue(personalData.optionalData);
          this.personalDataFormGroup.setValue(clonedPersonalData);
        }
      });
  }
}
