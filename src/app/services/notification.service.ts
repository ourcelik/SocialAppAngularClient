import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationModel } from '../models/notificationModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LocalStorageService } from './local-storage.service';
import { ProfileService } from './profile.service';
import { JwtPayload } from 'jwt-decode';
import { NotificationCountModel } from '../models/notificationCountModel';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl:string = "https://localhost:44368/api/Notifications/";

  private notificationCount:NotificationCountModel = {notificationCount : 0};

  constructor(private profileService:ProfileService,
              private localStorageService:LocalStorageService,
              private httpClient:HttpClient) {


   }

  getUserNotificationSettings():Observable<SingleResponseModel<NotificationModel>>{
    
    let userToken = this.localStorageService.getItem("token");
    let userId:string| null = userToken != null ? this.profileService.getUserIdFromToken(userToken)
        ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] : "";
    
    let newUrl = this.apiUrl + "GetByUserId/" + parseInt(userId);

    return this.httpClient.get<SingleResponseModel<NotificationModel>>(newUrl);

  }

  getNotificationCount():NotificationCountModel
  {
    return this.notificationCount;
  }
  updateNotificationCount(count:number)
  {
    this.notificationCount.notificationCount = count;
  }

  updateUserNotificationSettings(notificationModel:NotificationModel):Observable<SingleResponseModel<number>>{
    let newUrl = this.apiUrl + "UpdateNotification";

    return this.httpClient.post<SingleResponseModel<number>>(newUrl,notificationModel);


  }
}
