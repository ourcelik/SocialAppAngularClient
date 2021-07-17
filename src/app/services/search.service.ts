import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private filterText:string;

  constructor() { }
  
  updateFilterText(filterText:string)
  {
    this.filterText = filterText;
  }
  getFilterText():string{
    return this.filterText;
  }
  clearFilterText(){
    this.filterText = "";
  }
  
}
