import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';

@Component({
  selector: 'app-sub-channel-card',
  templateUrl: './sub-channel-card.component.html',
  styleUrls: ['./sub-channel-card.component.css']
})
export class SubChannelCardComponent implements OnInit {


  @Input() room: RoomModel;

  constructor() { }

  ngOnInit(): void {
  }
  
  numSequence(num:number):Array<number>{
    return Array<number>(num);
  }
}
