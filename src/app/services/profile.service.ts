import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from '../models/profileModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private apiUrl:string = "https://localhost:44368/api/Profiles/";
  
  constructor(private httpClient:HttpClient) {
   }

   getUserProfileInfoByEmail(email:string):Observable<SingleResponseModel<ProfileModel>>{
     let newPath = this.apiUrl + "getbyemail/" + email;
    return this.httpClient.get<SingleResponseModel<ProfileModel>>(newPath);
   }
}
