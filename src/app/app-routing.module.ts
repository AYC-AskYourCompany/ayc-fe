import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './navbar/profile-button/settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
