import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
/*     if(typeof value === 'string') {
      const palabras = value.split(' ');
      const arrTemporal = [];
      for (let palabra of palabras) {
        arrTemporal.push(palabra[0].toUpperCase() + palabra.slice(1).toLowerCase());
      }
      return arrTemporal.join(' ');
    } */

    if(typeof value === 'string') {
      return value
      .split(' ')
      .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
    }
  }

}
