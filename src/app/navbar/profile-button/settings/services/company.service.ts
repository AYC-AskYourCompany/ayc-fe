import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../../../../models/company/company';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesSubject = new BehaviorSubject<Company[]>(null);

  constructor(private authService: AuthService,
              private httpClient: HttpClient) { }

  public getCompanyById(companyId: string): Observable<Company> {
    return this.httpClient.get<Company>(environment.COMPANY_SERVICE_URL + '/company/' + companyId);
  }

  public getCompanyByUsername(): Observable<Company[]> {
    if (this.companiesSubject.getValue() == null) {
      this.httpClient.get<Company[]>(environment.COMPANY_SERVICE_URL + '/company')
        .subscribe(companies => this.companiesSubject.next(companies));
    }

    return this.companiesSubject;
  }

  public saveCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(environment.COMPANY_SERVICE_URL + '/company', company);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(environment.COMPANY_SERVICE_URL + '/company/', company);
  }

  public addCompanyMember(companyId: string, username: string): Observable<Company> {
    return this.httpClient.put<Company>(`${environment.COMPANY_SERVICE_URL}/company/${companyId}/${username}`, null);
  }

  public deleteCompany(companyId: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.COMPANY_SERVICE_URL}/company/${companyId}`);
  }

  public deleteCompanyMember(companyId: string, username: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.COMPANY_SERVICE_URL}/company/${companyId}/${username}`);
  }

  public addCompanyToSubject(company: Company): void {
    const companies = this.companiesSubject.getValue();

    companies.push(company);
    this.companiesSubject.next(companies);
  }

  public deleteCompanyFromSubject(companyId: string): void {
    let companies;

    this.companiesSubject.pipe(
      map(companyArray => companyArray.filter(company => company.companyId !== companyId))
    ).subscribe(filteredCompanies => companies = filteredCompanies);

    this.companiesSubject.next(companies);
  }

  public deleteCompanyMemberFromCompanyInSubject(companyId: string, companyMember: string): void {
    let company;
    let filteredCompMembers;
    const loggedUser = this.authService.getUsername();

    this.companiesSubject.pipe(
      map(companyArray => companyArray
        .filter(companyFilter => companyFilter.companyId === companyId)
      )
    ).subscribe(filteredCompany => {
      company = filteredCompany[0];
      if (loggedUser === companyMember && loggedUser !== company.ceo) {
        this.deleteCompanyFromSubject(companyId);
        return;
      }
      filteredCompMembers = filteredCompany
        .map(comp => comp.companyMembers.filter(compMember => compMember.companyMember !== companyMember));

      company.companyMembers = filteredCompMembers[0];
    });
  }
}
