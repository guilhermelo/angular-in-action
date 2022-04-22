import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDetector',
  pure: false
})
export class ChangeDetectorPipe implements PipeTransform {
  count: number = 0;

  transform(value: any, args?: any): any {
    this.count++;
    console.log(`Componente change detection executado ${this.count} vezes`);

    return value;
  }

}
