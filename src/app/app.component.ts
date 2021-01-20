import { Component } from '@angular/core';
import { PersonalDataService } from './navbar/profile-button/settings/services/personal-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ayc-fe';

  constructor(private personalDataService: PersonalDataService) {
    this.personalDataService.getUserData().subscribe();
  }
}
