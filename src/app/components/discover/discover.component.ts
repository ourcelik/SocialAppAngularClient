import { Component, OnInit } from '@angular/core';
import { SystemRoomModel } from 'src/app/models/systemRoomModel';
import { SearchService } from 'src/app/services/search.service';
import { SystemRoomService } from 'src/app/services/system-room.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  rooms:SystemRoomModel[];
  dataloaded:boolean = false;
  constructor(private systemRoomService:SystemRoomService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.getSystemRooms();
    this.getFilterText();
  }

  getSystemRooms(){
    this.systemRoomService.getSystemRooms().subscribe((response) =>{
      this.rooms = response.data;
      this.dataloaded = true;
    });
  }


  
  numSequence(num:number):Array<number>{
    return Array<number>(num);
  }
  getFilterText(){
    return this.searchService.getFilterText();
  }

}
