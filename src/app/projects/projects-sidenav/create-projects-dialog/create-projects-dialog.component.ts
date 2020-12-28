import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-projects-dialog',
  templateUrl: './create-projects-dialog.component.html',
  styleUrls: ['./create-projects-dialog.component.scss']
})
export class CreateProjectsDialogComponent {

  constructor(public dialogRef: MatDialogRef<CreateProjectsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('CALLED');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
