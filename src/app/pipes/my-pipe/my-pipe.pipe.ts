import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let newValue = value;

    console.log(args);

    if(typeof value === 'string') {
      newValue = value.replace(/[aeiouà-ú]/gi, '');
    }

    return newValue;
  }

}
