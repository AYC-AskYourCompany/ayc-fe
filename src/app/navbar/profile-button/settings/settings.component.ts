import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Skills } from '../../models/forms/skills';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  username: string;
  personalDataFormGroup: FormGroup;
  optionalDataFormGroup: FormGroup;
  optionalDataSkills: Skills[] = [];

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.username = 'msauter';
  }

  ngOnInit(): void {
    this.initializePersonalDataForm();
    this.initializeOptionalDataForm();
  }

  setOptionalDataSkills(skills: Skills[]): void {
    this.optionalDataSkills = skills;
  }

  savePersonalData(): void {
    console.log(this.personalDataFormGroup.getRawValue());
  }

  saveOptionalData(): void {
    this.optionalDataFormGroup.get('skills').setValue(this.optionalDataSkills);
    console.log(this.optionalDataFormGroup.getRawValue());
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
      jobPosition: [''],
      personalDescription: ['']
    });
  }
}
