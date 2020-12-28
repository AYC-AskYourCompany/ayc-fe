import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectsDialogComponent } from './create-projects-dialog/create-projects-dialog.component';

@Component({
  selector: 'app-projects-sidenav',
  templateUrl: './projects-sidenav.component.html',
  styleUrls: ['./projects-sidenav.component.scss']
})
export class ProjectsSidenavComponent {

  @Output() closeSidenavEvent = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  closeSidenav(): void {
    this.closeSidenavEvent.emit();
  }

  openCreateProjectDialog(): void {
    this.dialog.open(CreateProjectsDialogComponent, { width: '800px', data: {name: 'msauter', animal: 'giraffe'}});
  }
}
