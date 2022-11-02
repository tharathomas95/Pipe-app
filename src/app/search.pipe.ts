import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, name: string) {
    if (name === '') {
      return value;
    }
    return value.filter((employee: any) => {
      employee.firstName.startsWith(name);
    });
  }
}
