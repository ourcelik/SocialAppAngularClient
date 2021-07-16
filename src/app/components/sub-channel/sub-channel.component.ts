import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomModel } from 'src/app/models/roomModel';
import { SearchService } from 'src/app/services/search.service';
import { SubRoomService } from 'src/app/services/sub-room.service';

@Component({
  selector: 'app-sub-channel',
  templateUrl: './sub-channel.component.html',
  styleUrls: ['./sub-channel.component.css']
})
export class SubChannelComponent implements OnInit {

  rooms: RoomModel[];

  constructor(private subRoomService: SubRoomService,
    private activatedRoute: ActivatedRoute,
    private searchService:SearchService

  ) { }

  ngOnInit(): void {
    this.getByActivatedRoot();
  }
  getRoomsByMainRoomId(id: number) {
    this.subRoomService.getRoomsByMainRoomId(id).subscribe(response => {
      this.rooms = response.data;
      console.log(this.rooms);
    });
  }

  getByActivatedRoot(){
    this.activatedRoute.params.subscribe(params =>{
      if(params["mainChannelId"]){
        this.getRoomsByMainRoomId(params["mainChannelId"]);
      }
    });
  }
  numSequence(num:number):Array<number>{
    return Array<number>(num);
  }
  getFilterText(){
    return this.searchService.getFilterText();
  }


}
