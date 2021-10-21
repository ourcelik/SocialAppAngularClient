import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { NotificationCountModel } from 'src/app/models/notificationCountModel';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  filterText: string = "";
  notificationCount:NotificationCountModel;
  constructor(private searchService: SearchService,
    private authService:AuthService,
    private notificationService:NotificationService
    ) { }

  ngOnInit(): void {
    this.setNotificationCount();
  }
  updateFilter() {
    this.searchService.updateFilterText(this.filterText);
  }
  isLoggedIn():boolean{
    return this.authService.isAuthenticated();
  }
  logout(){
    this.authService.logout();
  }

  setNotificationCount():void
  {
    this.notificationCount = this.notificationService.getNotificationCount();
  }

}
