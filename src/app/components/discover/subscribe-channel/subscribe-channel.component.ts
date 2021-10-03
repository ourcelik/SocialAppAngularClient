import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';

@Component({
  selector: 'app-subscribe-channel',
  templateUrl: './subscribe-channel.component.html',
  styleUrls: ['./subscribe-channel.component.css']
})
export class SubscribeChannelComponent implements OnInit {

  constructor() { }

  @Output() channelSubscription = new EventEmitter<RoomModel>();

  @Input() room: RoomModel;

  ngOnInit(): void {
  }
  SubscribeChannel(room:RoomModel){
    this.channelSubscription.emit(room);
  }

  changeButtonColorBySubscriptionStatus(room:RoomModel)
  {
    if(room.isSubscribedModel.isSubscribed)
    {
      return "btn-danger";
    }
    else
    {
      return "btn-primary";
    }
  }
}
