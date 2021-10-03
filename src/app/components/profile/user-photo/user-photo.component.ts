import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.css']
})
export class UserPhotoComponent implements OnInit {

  @Input() photoUrl: String;

  constructor() { }

  ngOnInit(): void {
  }

}
