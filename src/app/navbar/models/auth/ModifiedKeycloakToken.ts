import { KeycloakTokenParsed } from 'keycloak-js';

export interface ModifiedKeycloakToken extends KeycloakTokenParsed {
  preferred_username?: string;
  email?: string;
}
