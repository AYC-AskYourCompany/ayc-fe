import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Skills } from '../../../models/forms/skills';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() chipsList: Skills[];

  @Output() changeInputValueEvent = new EventEmitter<Skills[]>();

  list: Skills[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    this.list = this.chipsList !== undefined ? this.chipsList : [];
    this.changeInputValueEvent.emit(this.list);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.list.push({ skill: value.trim() });
    }

    if (input) {
      input.value = '';
    }
    this.changeInputValueEvent.emit(this.list);
  }

  remove(chip: Skills): void {
    const index = this.list.indexOf(chip);

    if (index >= 0) {
      this.list.splice(index, 1);
    }
    this.changeInputValueEvent.emit(this.list);
  }

  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue(): void { }

}
