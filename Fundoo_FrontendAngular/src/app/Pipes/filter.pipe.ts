import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchNote: string) {
    console.log(searchNote);
    if (value.length === ''){
      return value;
    }

    const Message = [];
    for(const note of value) {
      if(note.title.includes(searchNote)) {
        Message.push(note)
      }
    }
    return Message;
     
  }
}
