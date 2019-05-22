import{Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'startsWith'
  })
  export class StartsWithPipe implements PipeTransform {
  
    transform(items: any[], prop: string, term: string): any[] {
      if (!Array.isArray(items) || !term) {
        return items;
      }
  
      const strTerm: string = term.toLowerCase();
  
      return items.filter(item => {
        return item[prop] && item[prop].toLowerCase().startsWith(strTerm);
      });
    }
  }