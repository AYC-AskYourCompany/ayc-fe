import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsSidenavComponent } from './projects-sidenav/projects-sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsPanelComponent } from './projects-sidenav/projects-panel/projects-panel.component';
import { CreateProjectsDialogComponent } from './projects-sidenav/create-projects-dialog/create-projects-dialog.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsSidenavComponent,
    ProjectsPanelComponent,
    CreateProjectsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
