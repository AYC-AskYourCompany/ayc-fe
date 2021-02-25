import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-company-information-container',
  templateUrl: './detail-company-information-container.component.html',
  styleUrls: ['./detail-company-information-container.component.scss']
})
export class DetailCompanyInformationContainerComponent {

  @Input() label: string;
  @Input() information: string;

  constructor() { }

}
