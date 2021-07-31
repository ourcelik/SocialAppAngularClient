import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {JwtPayload} from 'jwt-decode';
import { shareReplay } from 'rxjs/operators';
import { ProfileModel } from 'src/app/models/profileModel';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profile:ProfileModel;

  constructor(private profileService:ProfileService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    let token = this.localStorageService.getItem("token");
    if(token)
    {
      let decodedToken = jwt_decode<JwtPayload>(token);
      if(decodedToken.email)
      {
        this.profileService.getUserProfileInfoByEmail(decodedToken.email)
        .pipe(
          shareReplay()
        )
        .subscribe(response =>{
          this.profile = response.data;
        });
      }
    }
  }
  
  getRelationStatus(){
    return this.profile.relationStatus?"Var":"Yok";
  }
}
