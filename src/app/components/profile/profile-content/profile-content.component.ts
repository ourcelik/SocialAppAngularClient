import { Component, Input, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profileModel';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {

  @Input() profile: ProfileModel;

  constructor() { }

  ngOnInit(): void {
  }

}
