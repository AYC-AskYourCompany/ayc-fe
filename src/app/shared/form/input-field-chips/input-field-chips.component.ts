import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipListChange} from '@angular/material/chips';
import {Skills} from '../../../navbar/models/forms/skills';
import {FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-field-chips',
  templateUrl: './input-field-chips.component.html',
  styleUrls: ['./input-field-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldChipsComponent),
      multi: true
    }
  ]
})
export class InputFieldChipsComponent implements OnInit {

  @Input() label: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  @Output() changeInputValueEvent = new EventEmitter<Skills[]>();

  skills: Skills[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.push({skill: value.trim()});
    }

    if (input) {
      input.value = '';
    }
    this.changeInputValueEvent.emit(this.skills);
  }

  remove(fruit: Skills): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
    this.changeInputValueEvent.emit(this.skills);
  }

  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue(): void { }
}
