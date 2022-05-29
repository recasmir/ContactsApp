import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../../models/contact.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Contact[], search: string = '', page: number = 0, increment: number = 0): Contact[] {

    if(search.length === 0)
    return value.slice(page, page+increment);

    const filteredContact = value.filter( contact => contact.name.includes(search));
    return filteredContact.slice(page, page+increment);
  }

}
