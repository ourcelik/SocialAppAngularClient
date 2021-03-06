import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { LoginModel } from 'src/app/models/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RealtimeNotificationService } from 'src/app/services/realtime-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private router:Router,
    private realtimeNotificationService:RealtimeNotificationService
  ) {
    this.createLoginForm();
   }
  
  ngOnInit(): void {
    console.log(this.authService.isExpired());
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userLoginInfo: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel:LoginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel)
      .pipe(
        shareReplay()
      )
      .subscribe((response:SingleResponseModel<TokenModel>)=>{
          this.toastrService.info(response.message);
          this.localStorageService.setItem("token",response.data.token);
          this.localStorageService.setItem("expireTokenAt",JSON.stringify(response.data.expiration.valueOf()));
          this.realtimeNotificationService.reconnectNotification();
          this.router.navigate(["discover"]);
      },
      responseError =>{
        this.toastrService.error(responseError.error.message,"Ge??ersiz");
        
      });
    }
  }
}


