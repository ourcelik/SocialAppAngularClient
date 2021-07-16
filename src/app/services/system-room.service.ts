import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemRoomModel } from '../models/systemRoomModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SystemRoomService {
  
  private apiUrl:string = "https://localhost:44368/api/";

  constructor(private httpClient:HttpClient) { }

  getSystemRooms():Observable<ListResponseModel<SystemRoomModel>>{
    let newPath = this.apiUrl + "ConstantRooms/getall";
    return this.httpClient.get<ListResponseModel<SystemRoomModel>>(newPath);
  }
}
