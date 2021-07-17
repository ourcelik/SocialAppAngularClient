import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    private router:Router
  ) {
    this.createLoginForm();
   }

  ngOnInit(): void {
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
      this.authService.login(loginModel).subscribe((response:SingleResponseModel<TokenModel>)=>{
        this.toastrService.info(response.message);
          this.localStorageService.setItem("token",response.data.token);
          this.router.navigate(["discover"]);
      },
      responseError =>{
        this.toastrService.error(responseError.error.message,"Geçersiz");
        
      });
    }
  }
}
