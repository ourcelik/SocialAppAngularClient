import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filterText:string="";

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {

  }
  updateFilter()
  {
    this.searchService.updateFilterText(this.filterText);
  }

}
