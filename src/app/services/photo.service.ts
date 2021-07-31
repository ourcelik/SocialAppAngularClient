import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from '../models/photoModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl: string = "https://localhost:44368/api/Photos/";


  constructor(private httpClient:HttpClient) { }

  GetProfilePhoto(id:number){
    const newUrl = this.apiUrl + "getphotosbyprofileid/" + id;
    this.httpClient.get<SingleResponseModel<PhotoModel>>(newUrl);
  }
  UpdatePhoto(photoModel:PhotoModel):Observable<SingleResponseModel<number>>{
    const newUrl = this.apiUrl + "updatephoto";
    return  this.httpClient.post<SingleResponseModel<number>>(newUrl,photoModel);
  }
}
