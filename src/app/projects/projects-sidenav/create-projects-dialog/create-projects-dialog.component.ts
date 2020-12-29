import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-projects-dialog',
  templateUrl: './create-projects-dialog.component.html',
  styleUrls: ['./create-projects-dialog.component.scss']
})
export class CreateProjectsDialogComponent implements OnInit {

  createProjectFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateProjectsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeCreateFormGroup();
  }

  createProject(): void {
    console.log(this.createProjectFormGroup.getRawValue());
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private initializeCreateFormGroup(): void {
    this.createProjectFormGroup = this.fb.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      teamSize: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }
}
