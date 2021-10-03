import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationModel } from 'src/app/models/notificationModel';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile-notification-settings',
  templateUrl: './profile-notification-settings.component.html',
  styleUrls: ['./profile-notification-settings.component.css']
})
export class ProfileNotificationSettingsComponent implements OnInit {

  notificationUpdateForm:FormGroup;
  private notificationModel:NotificationModel;
  notificationConst:String = 'bildirim gönder';

  constructor(private notificationService:NotificationService,
                      private formBuilder: FormBuilder,
                      private toastrService:ToastrService,
                      private router:Router) { }

  ngOnInit(): void {
    this.createNotificationBlankForm();
    this.getUserNotificationSettings();
  }
  createNotificationBlankForm(){
    this.notificationUpdateForm = this.formBuilder.group({
      message : [false,Validators.required],
      messagelike : [false,Validators.required],
      newMatch : [false,Validators.required],
      newInApp : [false,Validators.required],
      other :[false,Validators.required],
      superLike :[false,Validators.required]
    });
  }
  createNotificationForm(){
    this.notificationUpdateForm = this.formBuilder.group({
      message : [this.notificationModel.message,Validators.required],
      messagelike : [this.notificationModel.messagelike,Validators.required],
      newMatch : [this.notificationModel.newMatch,Validators.required],
      newInApp : [this.notificationModel.newInApp,Validators.required],
      other :[this.notificationModel.other,Validators.required],
      superLike :[this.notificationModel.superlike,Validators.required]
    });
  }
  getUserNotificationSettings()
  {
    this.notificationService.getUserNotificationSettings().subscribe((response)=>{
      this.notificationModel = response.data;
      this.createNotificationForm();
    })
  }
  updateUserNotificationSettings(){
    if (this.notificationUpdateForm.valid) {
      let userNotifyModel:NotificationModel = Object.assign({},this.notificationUpdateForm.value);
      userNotifyModel.notificationId = this.notificationModel.notificationId;
      this.notificationService.updateUserNotificationSettings(userNotifyModel).subscribe((response)=>{
        this.toastrService.success('Bildirim Tercihleri Başarıyla Güncellendi');
        this.router.navigate(['profile/notificationSettings']);
      },
      (responseErrror)=>{
        this.toastrService.error("Bildirimler Güncellenemedi Sonra Tekrar Deneyiniz");
      }
      );
    }
  }

}
