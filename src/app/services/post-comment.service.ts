import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/commentModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  private apiUrl: string = "https://localhost:44368/api/PostComment/";


  constructor(
    private httpClient:HttpClient
  ) { }

  getPostComments(id:number):Observable<ListResponseModel<CommentModel>>
  {
    let newUrl = this.apiUrl + "GetAllCommentsByPostId/" + id;

    var data = this.httpClient.get<ListResponseModel<CommentModel>>(newUrl);

    return data;
  }
}

