import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-company-delete',
  templateUrl: './detail-company-delete.component.html',
  styleUrls: ['./detail-company-delete.component.scss']
})
export class DetailCompanyDeleteComponent {

  @Output() deleteCompanyEvent = new EventEmitter<any>();

  constructor() { }

  deleteCompany(): void {
    this.deleteCompanyEvent.emit();
  }

}
