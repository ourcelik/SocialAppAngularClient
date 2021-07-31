import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profileModel';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';
import jwt_decode from 'jwt-decode';
import { JwtPayload } from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateProfileModel } from 'src/app/models/updateProfileModel';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
import { PhotoModel } from 'src/app/models/photoModel';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  profile: ProfileModel;
  profileForm: FormGroup;
  ProfilePhotoUpdateForm: FormGroup;

  constructor(
    private profileService: ProfileService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  createProfileForm()
   {
    this.profileForm = this.formBuilder
      .group({
      name: [this.profile.name,Validators.required],
      
      surname: [this.profile.surname,Validators.required],

      weight: [this.profile.weight,Validators.required],

      height: [this.profile.height,Validators.required],

      genderId: [this.profile.genderId,Validators.required],

      RelationshipStatus: [this.getRelationStatus(), Validators.required],
      
      birthdate: [formatDate(this.profile.birthdate, 'yyyy-MM-dd', 'en'),Validators.required],
      });
  }

  UpdateProfile() {
    if (this.profileForm.valid) 
    {
      let UpdateProfileModel: UpdateProfileModel = Object.assign({}, this.profileForm.value);
      UpdateProfileModel.profileId = this.profile.profileId;
      UpdateProfileModel.RelationshipStatus = this.fixRelationShipStatus(UpdateProfileModel);

    this.profileService
      .updateProfile(UpdateProfileModel)
      .pipe(shareReplay())
      .subscribe((response) => {
        this.toastrService.success('Profil Başarıyla Güncellendi');
        this.router.navigate(['profile']);
      });
    }
  }
  
  CreateProfilePhotoUpdateForm() {
    this.ProfilePhotoUpdateForm = this.formBuilder.group({
      url:[this.profile.profilePhotoUrl,Validators.required],
    });
  }
  




   UpdateProfilePhoto()
   {
     if(this.ProfilePhotoUpdateForm.valid){
      this.closeModalPage();
      let photoModel:PhotoModel = Object.assign({},this.ProfilePhotoUpdateForm.value);
      photoModel.profileId = this.profile.profileId;
      photoModel.photoId = this.profile.profilePhotoId;

      this.photoService.UpdatePhoto(photoModel)
      .pipe(shareReplay())
      .subscribe(response=> {
        this.toastrService.success("Profil fotoğrafı Başarıyla Güncellendi");
        this.router.navigate(["profile"]);
      },
      err =>{
        this.toastrService.error("Bilinmeyen bir hata oluştu");
      }
      );
     }
   }

  closeModalPage(){
    const closeButton = document.getElementById("CloseProfilePhotoEditButton");
    if (closeButton) {
      closeButton.click();
    }
  }
  getProfile() {
    let token = this.localStorageService.getItem('token');
    if (token) {
      let decodedToken = jwt_decode<JwtPayload>(token);
      if (decodedToken.email) {
        this.profileService
          .getUserProfileInfoByEmail(decodedToken.email)
          .subscribe((response) => {
            this.profile = response.data;
            this.createProfileForm();
            this.CreateProfilePhotoUpdateForm();
          });
      }
    }
  }
  getRelationStatus() {
    return this.profile.relationStatus ? 1 : 0;
  }
  fixRelationShipStatus(ProfileUpdateModel: UpdateProfileModel) {
    return ProfileUpdateModel.RelationshipStatus === '1' ? true : false;
  }
}
