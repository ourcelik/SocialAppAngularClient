import { Component, Input, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profileModel';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input() profile: ProfileModel;

  constructor() { }

  ngOnInit(): void {
  }
  getRelationStatus(){
    return this.profile.relationStatus?"Var":"Yok";
  }

}
