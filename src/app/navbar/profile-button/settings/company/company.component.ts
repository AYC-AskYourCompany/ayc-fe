import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCompanyDialogComponent } from './create-company-dialog/create-company-dialog.component';
import { Company } from '../../../../models/company/company';
import { Observable } from 'rxjs';
import { DetailCompanyDialogComponent } from './detail-company-dialog/detail-company-dialog.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss',
              '../personal-data/personal-data.component.scss']
})
export class CompanyComponent {

  @Input() companies: Observable<Company[]>;

  constructor(private dialog: MatDialog) { }

  openDetailCompanyDialog(company: Company): void {
    this.dialog.open(DetailCompanyDialogComponent, { width: '600px', height: 'auto', data: company });
  }

  openCreateCompanyDialog(): void {
    this.dialog.open(CreateCompanyDialogComponent, { width: '600px', height: 'auto', data: {name: 'msauter', animal: 'giraffe'}});
  }
}
