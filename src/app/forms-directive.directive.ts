import { Directive } from '@angular/core';
import { passwordValidator } from './password.validator';
import { AbstractControl, NG_VALIDATORS, Validator,ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appFormsDirective]',
  providers: [{ provide: NG_VALIDATORS, useValue: passwordValidator, multi: true }]
})
export class FormsDirectiveDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator(control);
  }

  constructor() { }

}
