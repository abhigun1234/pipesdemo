import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(value:any): any {
    console.log("value",value)
    let newString = "";
    for (let i = value.length - 1; i >= 0; i--) {
        newString += value[i];
    }
    return newString;
  
  }

}
