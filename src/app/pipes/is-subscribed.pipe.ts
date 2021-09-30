import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSubscribed'
})
export class IsSubscribedPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {

    return value == true ? "Abone Olundu" : "Abone Ol";

  }

}
