import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Skills} from '../../../models/forms/skills';

@Component({
  selector: 'app-optional-data',
  templateUrl: './optional-data.component.html',
  styleUrls: ['./optional-data.component.scss',
              '../personal-data/personal-data.component.scss']
})
export class OptionalDataComponent {

  @Input() optionalDataFormGroup: FormGroup;

  @Output() saveOptionalDataEvent = new EventEmitter();
  @Output() inputSkills = new EventEmitter<Skills[]>();

  constructor() { }

  saveOptionalData(): void {
    this.saveOptionalDataEvent.emit();
  }

  changedSkills(skills: Skills[]): void {
    this.inputSkills.emit(skills);
  }
}
