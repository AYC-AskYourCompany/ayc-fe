import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8007/auth',
  realm: 'ayc',
  clientId: 'ayc-fe'
};

export const environment = {
  production: false,
  keycloakConfig,
  USER_SERVICE_URL: 'http://localhost:8079',
  COMPANY_SERVICE_URL: 'http://localhost:8078'
};
