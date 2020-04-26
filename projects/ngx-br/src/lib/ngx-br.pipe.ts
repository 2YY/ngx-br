import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxBr'
})
export class NgxBrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    return value.trim().replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
