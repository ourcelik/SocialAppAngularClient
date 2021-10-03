import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {

  @Input() userStatistic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
