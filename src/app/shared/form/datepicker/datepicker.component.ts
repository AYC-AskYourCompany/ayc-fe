import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent {

  @Input() label: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  constructor() { }

  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue(): void { }

}
