import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Skills } from '../../../../models/forms/skills';
import { PersonalDataService } from '../services/personal-data.service';

@Component({
  selector: 'app-optional-data',
  templateUrl: './optional-data.component.html',
  styleUrls: ['./optional-data.component.scss',
              '../personal-data/personal-data.component.scss']
})
export class OptionalDataComponent implements OnInit {

  @Input() optionalDataFormGroup: FormGroup;

  @Output() saveOptionalDataEvent = new EventEmitter();
  @Output() inputSkills = new EventEmitter<Skills[]>();

  savedSkills: Skills[];

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit(): void {
    this.personalDataService.getUserData()
      .subscribe(savedSkills => this.savedSkills = savedSkills ? savedSkills.optionalData.skills : null);
  }

  saveOptionalData(): void {
    this.saveOptionalDataEvent.emit();
  }

  changedSkills(skills: Skills[]): void {
    this.inputSkills.emit(skills);
  }
}
