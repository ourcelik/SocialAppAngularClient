import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { RoomModel } from 'src/app/models/roomModel';
import { IsSubcscribeModel } from 'src/app/models/isSubscribedModel';
import { RoomMemberService } from 'src/app/services/room-member.service';
import { SearchService } from 'src/app/services/search.service';
import { SubRoomService } from 'src/app/services/sub-room.service';

@Component({
  selector: 'app-sub-channel',
  templateUrl: './sub-channel.component.html',
  styleUrls: ['./sub-channel.component.css']
})
export class SubChannelComponent implements OnInit {

  rooms: RoomModel[];
  isSubscribedModel:IsSubcscribeModel;

  constructor(private subRoomService: SubRoomService,
    private activatedRoute: ActivatedRoute,
    private searchService:SearchService,
    private roomMemberService:RoomMemberService,
    private toastrService:ToastrService,

  ) { }

  ngOnInit(): void {
    this.getByActivatedRoot();
    this.clearFilterText();

  }
  getRoomsByMainRoomId(id: number) {
    this.subRoomService.getRoomsByMainRoomId(id).subscribe(response => {
      this.rooms = response.data;
      this.rooms.forEach(r=>{
        r.isSubscribedModel = {isSubscribed : false}
        this.isSubscribed(r.roomId);
      })
      console.log(this.rooms);
    });
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

  isSubscribed(roomId:number){

    this.roomMemberService.isAlreadySubscribed({roomId:roomId,userId:0}).subscribe((res)=>{
      this.rooms.filter(r=>r.roomId == roomId)[0].isSubscribedModel.isSubscribed = res.data.isSubscribed;
      console.log(res.data.isSubscribed,roomId);
    });

  }
  SubscribeChannelToggle(room:RoomModel)
  {
    if (room.isSubscribedModel.isSubscribed) {
      this.roomMemberService.unSubscribeUserToChannel({
        roomId:room.roomId,
        userId:0
      }).subscribe((res)=>{
        this.isSubscribed(room.roomId);
        this.toastrService.success("Abonelikten Çıkıldı...");
      },
      ()=>{
        this.toastrService.error("Birşeyler yanlış gitti,sonra tekrar deneyiniz...");
      }
      );
    }
    else
    {

      this.roomMemberService.subscribeUserToChannel({
        rankId:3,
        roomId:room.roomId,
        userId:0
      }).subscribe((res)=>{
        this.isSubscribed(room.roomId);
        this.toastrService.success("Abone Olundu...");
      },
      ()=>{
        this.toastrService.error("Birşeyler yanlış gitti,sonra tekrar deneyiniz...");
      }
      );
    }
  }

  getByActivatedRoot(){
    this.activatedRoute.params
    .pipe(
      shareReplay()
    )
    .subscribe(params =>{
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
  clearFilterText(){
    this.searchService.clearFilterText();
  }

}
