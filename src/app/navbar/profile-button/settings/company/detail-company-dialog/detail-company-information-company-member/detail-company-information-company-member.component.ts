import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-company-information-company-member',
  templateUrl: './detail-company-information-company-member.component.html',
  styleUrls: ['./detail-company-information-company-member.component.scss']
})
export class DetailCompanyInformationCompanyMemberComponent {

  @Input() companyMember: string;
  @Input() isCeo: boolean;

  @Output() deleteMemberEvent = new EventEmitter<string>();

  constructor() { }

  deleteMember(): void {
    this.deleteMemberEvent.emit(this.companyMember);
  }

}
