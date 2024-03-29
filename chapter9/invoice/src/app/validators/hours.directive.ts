import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { HoursValidator } from './hours.validator';

@Directive({
  selector: '[hours][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: HoursDirective,
      multi: true
    }
  ]
})
export class HoursDirective implements Validator {
  private validator = HoursValidator;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }

  constructor() { }

}
