import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filterText: string = "";

  constructor(private searchService: SearchService,private authService:AuthService) { }

  ngOnInit(): void {

  }
  updateFilter() {
    this.searchService.updateFilterText(this.filterText);
  }
  isLoggedIn():boolean{
    return this.authService.isAuthenticated();
  }


}
