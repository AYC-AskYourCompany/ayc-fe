import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './utils/keycloak-init';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterial } from './utils/angular-material';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileButtonComponent } from './shared/navbar/profile-button/profile-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileButtonComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterial,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
