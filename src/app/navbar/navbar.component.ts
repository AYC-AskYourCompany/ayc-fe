import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  username: string;

  constructor(private authService: AuthService,
              private keycloakService: KeycloakService) {
    this.username = this.authService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
