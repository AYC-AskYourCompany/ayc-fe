import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth.service';
import { Skills } from '../../../../../models/forms/skills';
import { CompanyService } from '../../services/company.service';
import { ToasterService } from 'angular2-toaster';
import { PopUpConst } from '../../../../../shared/const/pop-up-const';

@Component({
  selector: 'app-create-company-dialog',
  templateUrl: './create-company-dialog.component.html',
  styleUrls: ['./create-company-dialog.component.scss']
})
export class CreateCompanyDialogComponent implements OnInit {

  companyDataFormGroup: FormGroup;
  companyMembers: any = [];

  constructor(public dialogRef: MatDialogRef<CreateCompanyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private companyService: CompanyService,
              private toasterService: ToasterService,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeCompanyDataForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createCompany(): void {
    this.companyDataFormGroup.get('companyMembers').setValue(this.companyMembers);
    this.companyService.saveCompany(this.companyDataFormGroup.getRawValue())
      .subscribe(company => {
        this.toasterService.pop('success', PopUpConst.COMPANY_SUCCESS_TITLE, PopUpConst.COMPANY_SUCCESS_BODY);
        this.companyService.addCompanyToSubject(company);
    });
    this.dialogRef.close();
  }

  changedCompanyMember(skills: Skills[]): void {
    this.companyMembers = skills;
  }

  private initializeCompanyDataForm(): void {
    this.companyDataFormGroup = this.fb.group({
      companyName: ['', Validators.required],
      ceo: [this.authService.getUsername(), Validators.required],
      companyDescription: ['', Validators.required],
      companyMembers: ['']
    });

    this.companyDataFormGroup.controls.ceo.disable();
  }
}
