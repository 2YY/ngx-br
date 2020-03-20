import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libNgxBr'
})
export class LibNgxBrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
