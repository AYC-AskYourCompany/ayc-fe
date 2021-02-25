import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
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
  @Input() chipsList: any;
  @Input() objectKey: string;

  @Output() changeInputValueEvent = new EventEmitter<any[]>();

  list: any[] = [];
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
      this.list.push({ [this.objectKey]: value.trim() });
    }

    if (input) {
      input.value = '';
    }
    this.changeInputValueEvent.emit(this.list);
  }

  remove(chip: any): void {
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
