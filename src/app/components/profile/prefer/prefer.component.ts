import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreferModel } from 'src/app/models/preferModel';
import { PreferService } from 'src/app/services/prefer.service';

@Component({
  selector: 'app-prefer',
  templateUrl: './prefer.component.html',
  styleUrls: ['./prefer.component.css']
})
export class PreferComponent implements OnInit {

  preferUpdateForm:FormGroup;
  preferModel:PreferModel;
  minAge:number = 0;

  constructor( private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private router:Router,
    private preferService:PreferService) { }

ngOnInit(): void {
this.createPreferBlankForm();
this.getUserPreferSettings();
}
createPreferBlankForm(){
this.preferUpdateForm = this.formBuilder.group({
  MinAge : [0,[Validators.required,Validators.min(18),Validators.max(60)]],
  MaxAge : [0,[Validators.required,Validators.min(19),Validators.max(80)]],
  MaxDistance : [0,[Validators.required,Validators.min(1)]],
  GenderPreferId : [0,Validators.required],
  Universal : [false,Validators.required],
  ShowMe : [false,Validators.required],
  Autoplay : [false,Validators.required],
  LastSeen : [false,Validators.required],
  AppVoice : [false,Validators.required],
});
}
FillPreferForm(){
  this.preferUpdateForm = this.formBuilder.group({
    MinAge : [this.preferModel.minAge,Validators.required],
    MaxAge : [this.preferModel.maxAge,Validators.required],
    MaxDistance : [this.preferModel.maxDistance,Validators.required],
    GenderPreferId : [this.preferModel.genderPreferId,Validators.required],
    Universal : [this.preferModel.universal,Validators.required],
    ShowMe : [this.preferModel.showMe,Validators.required],
    Autoplay : [this.preferModel.autoplay,Validators.required],
    LastSeen : [this.preferModel.lastSeen,Validators.required],
    AppVoice : [this.preferModel.appVoice,Validators.required],
  });
  }

  getUserPreferSettings(){
    this.preferService.GetUserPrefers().subscribe((res)=>{
      this.preferModel = res.data;
      this.FillPreferForm();
    });
  }

  updateUserPreferSettings(){

    if (this.preferUpdateForm.valid) {
    let preferModel:PreferModel = Object.assign({},this.preferUpdateForm.value);
    preferModel.preferId = this.preferModel.preferId;
    console.log(preferModel);
    this.preferService.updateUserPreferSettings(preferModel).subscribe((res)=>{
      this.toastrService.success("bilgiler başarıyla güncellendi");
    },
    (err)=>{
      this.toastrService.error("birşeyler yalış gitti,Daha sonra tekrar deneyin.");
    })
      
    }

  }


}
