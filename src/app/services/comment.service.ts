import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentRequiredProps } from '../models/commentModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl:string = "https://localhost:44368/api/PostComment"

  constructor(private httpClient:HttpClient) { }

  createNewComment(commentModel:CommentRequiredProps):Observable<SingleResponseModel<number>>
  {
    
    let newUrl = this.apiUrl + "/CreateNewComment";

    return this.httpClient.post<SingleResponseModel<number>>(newUrl,commentModel);
  }
}
