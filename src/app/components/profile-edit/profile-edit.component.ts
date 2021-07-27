import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profileModel';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';
import jwt_decode from 'jwt-decode';
import {JwtPayload} from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateProfileModel } from 'src/app/models/updateProfileModel';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profile:ProfileModel;
  profileForm:FormGroup;
  constructor(private profileService:ProfileService,
    private localStorageService:LocalStorageService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  createProfileForm(){
    this.profileForm = this.formBuilder.group({
      'name':[this.profile.name,[Validators.minLength(3)]],
      'surname':[this.profile.surname,[Validators.minLength(3)]],
      'weight':[this.profile.weight,[Validators.maxLength(3),Validators.minLength(3)]],
      'height':[this.profile.height,[Validators.minLength(3),Validators.maxLength(3)]],
      'genderId':[this.profile.genderId],
      'RelationshipStatus':[this.getRelationStatus(),Validators.required],
      'birthdate':[formatDate(this.profile.birthdate, 'yyyy-MM-dd', 'en'),Validators.required]

    });
    
  }
  submit()
  {
    let UpdateProfileModel:UpdateProfileModel = Object.assign({},this.profileForm.value);

    UpdateProfileModel.profileId = this.profile.profileId;
    UpdateProfileModel.RelationshipStatus = this.fixRelationShipStatus(UpdateProfileModel);

    this.profileService.updateProfile(UpdateProfileModel).subscribe(response =>{

      this.toastrService.success("Profil Başarıyla Güncellendi");      
      this.router.navigate(["profile"]);

    });

    
    
    
  }

  getProfile(){
    let token = this.localStorageService.getItem("token");
    if(token)
    {
      let decodedToken = jwt_decode<JwtPayload>(token);
      if(decodedToken.email)
      {
        this.profileService.getUserProfileInfoByEmail(decodedToken.email).subscribe(response =>{
          this.profile = response.data;
              this.createProfileForm();

        });
      }
    }
    
  }
  getRelationStatus(){
    return this.profile.relationStatus?1:0;
  }
  fixRelationShipStatus(ProfileUpdateModel:UpdateProfileModel){
    return (ProfileUpdateModel.RelationshipStatus === "1") ? true:false;
  }
}


