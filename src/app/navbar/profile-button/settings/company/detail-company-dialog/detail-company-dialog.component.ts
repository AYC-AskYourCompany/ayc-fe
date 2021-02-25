import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../../../../models/company/company';
import { ToasterService } from 'angular2-toaster';
import { PopUpConst } from '../../../../../shared/const/pop-up-const';
import { AuthService } from '../../../../../shared/services/auth.service';

@Component({
  selector: 'app-detail-company-dialog',
  templateUrl: './detail-company-dialog.component.html',
  styleUrls: ['./detail-company-dialog.component.scss']
})
export class DetailCompanyDialogComponent {

  constructor(public dialogRef: MatDialogRef<DetailCompanyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public detailCompany: Company,
              private toasterService: ToasterService,
              private companyService: CompanyService,
              private authService: AuthService) { }

  isCeo(): boolean {
    return this.authService.getUsername() === this.detailCompany.ceo;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteMember(companyMember: string): void {
    this.companyService.deleteCompanyMember(this.detailCompany.companyId, companyMember).subscribe(data => {
        this.companyService.deleteCompanyMemberFromCompanyInSubject(this.detailCompany.companyId, companyMember);
        this.toasterService.pop('info', PopUpConst.COMPANY_MEMBER_DELETED_TITLE, PopUpConst.COMPANY_MEMBER_DELETED_BODY);
      }
    );
  }

  deleteCompany(): void {
    this.companyService.deleteCompany(this.detailCompany.companyId).subscribe(data => {
      this.toasterService.pop('info', PopUpConst.COMPANY_DELETE_TITLE, PopUpConst.COMPANY_DELETE_BODY);
      this.companyService.deleteCompanyFromSubject(this.detailCompany.companyId);
      this.onNoClick();
    });
  }
}
