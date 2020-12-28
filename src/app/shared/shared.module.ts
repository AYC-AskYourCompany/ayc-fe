import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFieldComponent } from './form/input-field/input-field.component';
import { AngularMaterial } from '../utils/angular-material';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldChipsComponent } from './form/input-field-chips/input-field-chips.component';
import { TextareaComponent } from './form/textarea/textarea.component';


@NgModule({
  declarations: [
    InputFieldComponent,
    InputFieldChipsComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    ReactiveFormsModule
  ],
  exports: [
    InputFieldComponent,
    InputFieldChipsComponent,
    TextareaComponent,
    AngularMaterial
  ]
})
export class SharedModule { }
