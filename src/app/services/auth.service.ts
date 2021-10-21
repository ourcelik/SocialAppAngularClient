import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { registerModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "https://localhost:44368/api/Auth/";

  constructor(private httpClient: HttpClient,
    private localStorageService:LocalStorageService
    
    ) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {

    let newPath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);

  }

  register(registerModel:registerModel)
  {
    let newPath = this.apiUrl + "register";

    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel);
  }
  logout()
  {
    this.clearToken();
  }
  
  isAuthenticated():boolean{
    return this.localStorageService.isInLocalStorage("token") && !this.isExpired() ? true:false;
  }
  isNotAuthenticated():boolean{
    return this.localStorageService.isInLocalStorage("token") && !this.isExpired() ? false:true;
  }
  isExpired():boolean{
    const expirationAt = this.getExpirationTime();
    if(expirationAt){
      return moment().isAfter(expirationAt);
   }
   return true;
   
  }
  private getExpirationTime(){
    const expiration = this.localStorageService.getItem("expireTokenAt");
    if(expiration){
      const  expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return false;
  }

  clearToken(){
    this.localStorageService.removeItems(["token","expireTokenAt"]);
  }
  

}
