import { Component, Input } from '@angular/core';
import { Company } from '../../../../../models/company/company';

@Component({
  selector: 'app-company-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.scss']
})
export class CompanyContainerComponent {

  @Input() company: Company;

  constructor() { }

}
