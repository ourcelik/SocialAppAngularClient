import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { CommentRequiredProps } from '../models/commentModel';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class RealtimeNotificationService {

  private connection:signalR.HubConnection;


  constructor(
    private authService:AuthService,
    private toastrService:ToastrService,
    private notificationService:NotificationService
  ) {
    this.connectNotification();
   }

  private connectNotification()
  {
    if (this.authService.isAuthenticated()) {
      
      this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`https://localhost:44368/userNotificationHub?access_token=${localStorage.getItem("token")}`)
      .withAutomaticReconnect()
      .build();
      
      this.connection.start().then(function () {  
        console.log('SignalR Connected!');  
      }).catch(function (err) {  
        return console.error(err.toString());  
      });
  
      this.connection.on("NotifyUserForNumberOfNoViewedNotification",(count:number)=>{
        console.log(count);
        this.notificationService.updateNotificationCount(count);
      });
      this.connection.on("NotifyUserForCommentContent",(comment:CommentRequiredProps)=>{
        this.toastrService.info(comment.comment,`${comment.relatedPostId} Nolu postunuzda yeni bir yorum var`)
      });
    }
  }

  reconnectNotification()
  {
    this.connectNotification();
  }


}

