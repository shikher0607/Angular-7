import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  splitArr;
  reverseArr;
  transform(value: any): any {
    this.splitArr = value.split("");
    this.reverseArr = this.splitArr.reverse();
    return this.reverseArr.join("");
  }

}
