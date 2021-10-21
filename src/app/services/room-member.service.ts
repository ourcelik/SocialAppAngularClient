import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMemberModel } from '../models/roomMemberModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ProfileService } from 'src/app/services/profile.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { IsSubcscribeModel } from '../models/isSubscribedModel';
import { IsSubscribedInputModel } from '../models/isSubscribedInputModel';
import { UnSubscribeModel } from '../models/unSubscribeModel';

@Injectable({
  providedIn: 'root'
})
export class RoomMemberService {

  private apiUrl = "https://localhost:44368/api/RoomMembers/";

  constructor(private httpClient : HttpClient,
              private profileService:ProfileService,
              private localStorageService:LocalStorageService
              ) { }


  subscribeUserToChannel(roomMemberModel:RoomMemberModel):Observable<SingleResponseModel<number>>
  {
    let newPath = this.apiUrl + "SubscribeUserToRoom";

    return this.httpClient.post<SingleResponseModel<number>>(newPath,roomMemberModel);
  }

  unSubscribeUserToChannel(unSubscribeModel:UnSubscribeModel):Observable<SingleResponseModel<number>>
  {
    let newPath = this.apiUrl + "UnSubscribeUserToRoom";

    return this.httpClient.post<SingleResponseModel<number>>(newPath,unSubscribeModel);
  }

  isAlreadySubscribed(isSubscribed:IsSubscribedInputModel):Observable<SingleResponseModel<IsSubcscribeModel>>{

    let newPath = this.apiUrl + "IsSubscribed";


    return this.httpClient.post<SingleResponseModel<IsSubcscribeModel>>(newPath,isSubscribed);

  }
}
