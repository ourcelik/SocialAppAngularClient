import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostModel } from '../models/CreatePostModel';
import { ListResponseModel } from '../models/listResponseModel';
import { postBelongsToModel } from '../models/postBelongsToModel';
import { PostDetailsWithPostInfoModel } from '../models/postDetailsWithPostInfoModel';
import { PostModel } from '../models/postModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UpdatePostModel } from '../models/updatePostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = "https://localhost:44368/api/Post/";

  constructor(private httpClient:HttpClient) { }


  getPostsByRoom(id:number):Observable<ListResponseModel<PostModel>>
  {
    let newPath = this.apiUrl + 'GetPostsByRoomId/' + id;
    var data = this.httpClient.get<ListResponseModel<PostModel>>(newPath);

    return data;
  }

  getPostsWithPostInfoByRoomId(id:number):Observable<ListResponseModel<PostDetailsWithPostInfoModel>>
  {
    let newPath = this.apiUrl + 'GetPostsWithPostInfoByRoomId/' + id;
    var data = this.httpClient.get<ListResponseModel<PostDetailsWithPostInfoModel>>(newPath);

    return data;
  }

  CreatePost(createPostModel:CreatePostModel):Observable<SingleResponseModel<number>>
  {
    let newPath = this.apiUrl + 'CreateNewPost';
    var data = this.httpClient.post<SingleResponseModel<number>>(newPath,createPostModel);

    return data;
  }
  
  UpdatePost(updatePostModel:UpdatePostModel):Observable<SingleResponseModel<number>>
  {
    let newPath = this.apiUrl + 'UpdatePost';

    var data = this.httpClient.patch<SingleResponseModel<number>>(newPath,updatePostModel);

    return data;
  }

  DeletePost(id:number):Observable<SingleResponseModel<number>>
  {
    let newPath = this.apiUrl + 'DeletePost/' + id;

    var data = this.httpClient.delete<SingleResponseModel<number>>(newPath)

    return data;
  }

  postBelongsToThisUser(postBelongsToModel:postBelongsToModel):Observable<SingleResponseModel<boolean>>
  {
    let newPath = this.apiUrl + 'PostCanBeDeletedByThisUser';

    var data = this.httpClient.post<SingleResponseModel<boolean>>(newPath,postBelongsToModel);

    return data;
  }
}
