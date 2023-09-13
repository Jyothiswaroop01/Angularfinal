import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items: any[], selectedCategory: string | undefined): any[] {
    if (!selectedCategory || selectedCategory === '') {
      return items;
    }
    return items.filter(items => items.category === selectedCategory);
  }

}
