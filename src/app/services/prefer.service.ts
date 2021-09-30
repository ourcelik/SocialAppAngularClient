import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreferModel } from '../models/preferModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LocalStorageService } from './local-storage.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class PreferService {

  constructor(
    private httpClient:HttpClient,
    private localStorageService:LocalStorageService,
    private profileService:ProfileService

  ) { }

  private apiUrl = "https://localhost:44368/api/Prefers/";

  GetUserPrefers():Observable<SingleResponseModel<PreferModel>>
  {
    let userToken = this.localStorageService.getItem("token");
    let userId:string| null = userToken != null ? this.profileService.getUserIdFromToken(userToken)
        ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] : "";
    let newUrl = this.apiUrl + "getByUserId/" + userId;
    return this.httpClient.get<SingleResponseModel<PreferModel>>(newUrl);
  }

  updateUserPreferSettings(preferModel:PreferModel):Observable<SingleResponseModel<number>>
  {
    let newUrl = this.apiUrl + "UpdatePreferSettings";

    return this.httpClient.post<SingleResponseModel<number>>(newUrl,preferModel);
  }
}
