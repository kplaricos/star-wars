import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';

@Pipe({
  name: 'numeral'
})
export class NumeralPipe implements PipeTransform {

  /**
   * Form population number to human readable format for
   * less caracteres
   * Eg: K for thousands, M for millions and B for billions
   * @param {sting} value number to format
   * @param args numeral format to used
   */
  transform(value: any, args?: any): any {
    return (value === 'unknown') ? 0 : numeral(value).format(args);
  }

}
