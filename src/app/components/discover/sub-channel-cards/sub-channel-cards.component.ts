import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sub-channel-cards',
  templateUrl: './sub-channel-cards.component.html',
  styleUrls: ['./sub-channel-cards.component.css']
})
export class SubChannelCardsComponent implements OnInit {

  @Input() rooms: RoomModel[];
  @Output() channelSubscription = new EventEmitter<RoomModel>();
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  SubscribeChannelToggle(event:RoomModel)
  {
    this.channelSubscription.emit(event);
  }
  getFilterText(){
    return this.searchService.getFilterText();
  }

}
