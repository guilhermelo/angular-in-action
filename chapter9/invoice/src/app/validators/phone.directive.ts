import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneValidator } from './phone.validators';

@Directive({
  selector: '[phone][ngModel]',
  // Torna a diretiva parte dos validators do angular
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  private validator = PhoneValidator();

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return this.validator(control);
  }
}
