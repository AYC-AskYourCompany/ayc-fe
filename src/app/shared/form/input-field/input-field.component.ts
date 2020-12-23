import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent {

  @Input() label: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  constructor() { }

  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue(): void { }

}
