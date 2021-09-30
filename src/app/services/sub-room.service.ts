import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { RoomModel } from '../models/roomModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class SubRoomService {

  private apiUrl:string = "https://localhost:44368/api/rooms/";

  constructor(private httpClient:HttpClient) { }

  getRoomsByMainRoomId(id:number):Observable<ListResponseModel<RoomModel>>{
    let newPath = this.apiUrl +"getroomsbymainroomid/" + id;
    return this.httpClient.get<ListResponseModel<RoomModel>>(newPath);
  }
  
}
