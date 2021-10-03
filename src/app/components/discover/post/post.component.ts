import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostDetailsWithPostInfoModel } from 'src/app/models/postDetailsWithPostInfoModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: PostDetailsWithPostInfoModel;

  @Output() likePost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  likePostEvent(id:number){
    this.likePost.emit(id);
  }

}
