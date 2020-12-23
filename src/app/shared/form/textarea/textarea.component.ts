import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit {

  @Input() label: string;
  @Input() formControlName: string;
  @Input() textareaHeight: number;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    document.getElementById('textarea').style.height = this.textareaHeight + 'px';
  }
  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue(): void { }

}
