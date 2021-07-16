import { Pipe, PipeTransform } from '@angular/core';
import { BaseRoomModel } from '../models/baseRoomModel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:BaseRoomModel[],filterText:string): any {
    
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText? value.filter((p:BaseRoomModel) => p.roomName.toLocaleLowerCase().indexOf(filterText)!=-1):value
  }

}
