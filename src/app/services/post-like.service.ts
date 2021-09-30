import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsAlreadyLikedPostModel } from '../models/isAlreadyLikedPostModel';
import { SendLikeToPost } from '../models/sendLikeToPostModel';
import { SendUnLikeToPost } from '../models/sendUnLikeToPost';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PostLikeService {

  private apiUrl = "https://localhost:44368/api/PostLike/";

  constructor(private httpClient:HttpClient) {

   }

  likePost(sendLikeToPost:SendLikeToPost):Observable<SingleResponseModel<number>>
  {
    let newUrl = this.apiUrl + 'SendLikeToPost';

    return this.httpClient.post<SingleResponseModel<number>>(newUrl,sendLikeToPost);

  }
  unLikePost(sendLikeToPost:SendUnLikeToPost):Observable<SingleResponseModel<number>>
  {
    let newUrl = this.apiUrl + 'GetLikeBack';

    return this.httpClient.post<SingleResponseModel<number>>(newUrl,sendLikeToPost);

  }
  isAlreadyLikedPost(isAlreadyLikedPostModel:IsAlreadyLikedPostModel):Observable<SingleResponseModel<boolean>>
  {
    let newUrl = this.apiUrl + 'IsAlreadyLikedPost';
    
    return this.httpClient.post<SingleResponseModel<boolean>>(newUrl,isAlreadyLikedPostModel);
  }
}
