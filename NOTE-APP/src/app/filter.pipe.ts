import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(items: any[], field:string, value: string): any[] {
    if(!items) return [];
    if(!field) return items;
    return items.filter( str => {
          return str.name.toLowerCase().includes(field.toLowerCase());
        });
   }
}