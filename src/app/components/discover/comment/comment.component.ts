import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/commentModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentTemp: CommentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
