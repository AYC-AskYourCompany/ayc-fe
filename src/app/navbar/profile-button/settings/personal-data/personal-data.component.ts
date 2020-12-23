import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  @Input() personalDataFormGroup: FormGroup;

  @Output() savePersonalDataEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  savePersonalData(): void {
    this.savePersonalDataEvent.emit();
  }

}
