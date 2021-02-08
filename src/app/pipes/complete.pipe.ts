import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complete'
})
export class CompletePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    // value true yada false geliceğini biliyorum
    // args ise pieden gönderilecek oldan diğer değerleri temsil eder.

    if(value === true)
      return 'Completed'
    else
      return 'Not Completed';
  }

}
