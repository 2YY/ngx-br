import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libNgxBr'
})
export class LibNgxBrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
