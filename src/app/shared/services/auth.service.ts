import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {ModifiedKeycloakToken} from '../../navbar/models/auth/ModifiedKeycloakToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenParsed: ModifiedKeycloakToken;

  constructor(private keycloakService: KeycloakService) {
    this.tokenParsed = this.keycloakService.getKeycloakInstance().tokenParsed;
  }

  public getUsername(): string {
    return this.tokenParsed.preferred_username;
  }

  public getEmail(): string {
    return this.tokenParsed.email;
  }
}
