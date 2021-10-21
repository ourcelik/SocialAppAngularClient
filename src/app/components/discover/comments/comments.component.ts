import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/commentModel';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postComments: CommentModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
