import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //encapsulation: ViewEncapsulation.None
})
export class MetricComponent implements OnChanges {

  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && isNaN(changes.value.currentValue)) {
      this.value = 0;
    }

    if (changes.max && isNaN(changes.max.currentValue)) {
      this.max = 0;
    }
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

  // validando inputs com getter e setter
  // private _value = 0;
  // private _max = 100;
  // @Input('used')
  // set value(value: number) {
  //   if (isNaN(value)) {
  //     value = 0;
  //   }

  //   this._value = value;
  // }

  // get value(): number {
  //   return this._value;
  // }

  // @Input('available')
  // set max(max: number) {
  //   if (isNaN(max)) {
  //     max = 100;
  //   }

  //   this._max = max;
  // }

  // get max(): number {
  //   return this._max;
  // }
}
