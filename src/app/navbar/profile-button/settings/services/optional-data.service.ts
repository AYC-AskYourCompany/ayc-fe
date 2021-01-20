import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionalData } from '../../../../models/user/optional-data';
import { environment } from '../../../../../environments/environment';
import { PersonalData } from '../../../../models/user/personal-data';
import { PersonalDataService } from './personal-data.service';

@Injectable({
  providedIn: 'root'
})
export class OptionalDataService {

  constructor(private httpClient: HttpClient,
              private personalDataService: PersonalDataService) { }

  public getOptionalData(): Observable<OptionalData> {
    return this.httpClient.get<OptionalData>(environment.USER_SERVICE_URL + '/optional-data');
  }

  public getOptionalDataByUsername(username: string): Observable<OptionalData> {
    return this.httpClient.get<OptionalData>(environment.USER_SERVICE_URL + '/optional-data/' + username);
  }

  public saveOptionalData(optionalData: OptionalData): Observable<PersonalData> {
    this.personalDataService.setSubjectOptionalData(optionalData);

    return this.httpClient.post<PersonalData>(environment.USER_SERVICE_URL + '/optional-data', optionalData);
  }
}
