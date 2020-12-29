import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  sidenavOpen = true;

  constructor() { }

  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
