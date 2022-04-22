import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { HoursValidator } from 'app/validators/hours.validator';

@Component({
  selector: 'app-hours-control',
  templateUrl: './hours-control.component.html',
  styleUrls: ['./hours-control.component.css'],
  providers: [
    {
      // define o componente como formControl para o Angular
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HoursControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => HoursControlComponent),
      multi: true
    }]
})
// ControlValueAccessor garante que o componente vai funcionar junto com form angular
export class HoursControlComponent implements ControlValueAccessor {

  hours: number;
  validateFn = HoursValidator;
  onChange = (v: any) => { };

  constructor() { }

  // avisa o form que o valor do componente mudou
  update() {
    this.onChange(this.hours);
  }

  keypress($event) {
    if ($event.key === 'ArrowUp') {
      this.setValue(.25);
    } else if ($event.key === 'ArrowDown') {
      this.setValue(-.25);
    }
  }

  setValue(change: number) {
    this.hours += change;
    this.update();
  }

  validate(control: FormControl) {
    return this.validateFn(control);
  }

  //usado pelo Angular para passar o valor para o form control
  writeValue(value: any) {
    if (value !== undefined) {
      this.hours = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched() { }

}
