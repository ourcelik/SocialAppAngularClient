import { Component, Input, OnInit } from '@angular/core';
import { SystemRoomModel } from 'src/app/models/systemRoomModel';

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['./discover-card.component.css']
})
export class DiscoverCardComponent implements OnInit {

  constructor() { }

  @Input() roomModel: SystemRoomModel;
  

  ngOnInit(): void {
  }
  
  numSequence(num:number):Array<number>{
    return Array<number>(num);
  }
}
