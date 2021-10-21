import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RealtimeNotificationService } from 'src/app/services/realtime-notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    private localStorageService:LocalStorageService,
    private router:Router,
    private realtimeNotificationService:RealtimeNotificationService

    ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  register() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel)
      .pipe(
        shareReplay()
      )
      .subscribe((response: SingleResponseModel<TokenModel>) => {

        this.toastrService.success(response.message,"Başarılı");
        this.localStorageService.setItem("token",response.data.token);
        this.localStorageService.setItem("expireTokenAt",JSON.stringify(response.data.expiration.valueOf()));
        this.realtimeNotificationService.reconnectNotification();
        this.router.navigate(["discover"]);

      })
    }
  }
}
