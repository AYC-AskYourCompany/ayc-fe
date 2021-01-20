import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalData } from '../../../../models/user/personal-data';
import { environment } from '../../../../../environments/environment';
import { OptionalData } from '../../../../models/user/optional-data';
import { AuthService } from '../../../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private personalDataSubject = new BehaviorSubject<PersonalData>(null);

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  public getUserData(): Observable<PersonalData> {
    if (this.personalDataSubject.getValue() === null) {
      this.httpClient.get<PersonalData>(environment.USER_SERVICE_URL + '/user')
        .subscribe(
          personalData => this.personalDataSubject.next(personalData),
        err => this.personalDataSubject.next(new PersonalData(this.authService.getUsername(), this.authService.getEmail()))
        );
    }

    return this.personalDataSubject;
  }

  public getUserDataByUsername(username: string): Observable<PersonalData> {
    return this.httpClient.get<PersonalData>(environment.USER_SERVICE_URL + '/user/' + username);
  }

  public saveUserData(personalData: PersonalData): Observable<PersonalData> {
    const personalDataSubjectValue = this.getSubjectValue();

    personalData.optionalData = personalDataSubjectValue.optionalData;
    this.personalDataSubject.next(personalData);

    return this.httpClient.post<PersonalData>(environment.USER_SERVICE_URL + '/user', personalData);
  }

  public deleteUser(): Observable<any> {
    return this.httpClient.delete(environment.USER_SERVICE_URL + '/user');
  }

  public setSubjectOptionalData(optionalData: OptionalData): void {
    const personalDataSubjectValue = this.getSubjectValue();

    personalDataSubjectValue.optionalData = optionalData;
    this.personalDataSubject.next(personalDataSubjectValue);
  }

  private getSubjectValue(): PersonalData {
    let personalDataSubjectValue = null;

    this.personalDataSubject
      .subscribe(personalDataSubjectOldValue => {
        personalDataSubjectValue = personalDataSubjectOldValue;
      });

    return personalDataSubjectValue;
  }
}
