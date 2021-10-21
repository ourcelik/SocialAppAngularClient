import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentRequiredProps } from 'src/app/models/commentModel';
import { PostDetailsWithPostInfoModel } from 'src/app/models/postDetailsWithPostInfoModel';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  @Input() post: PostDetailsWithPostInfoModel;

  @Output() likePost = new EventEmitter<number>();
  
  @Output() createComment = new EventEmitter<CommentRequiredProps>();

  constructor() { }

  ngOnInit(): void {
  }

  likePostEvent(id:number){
    this.likePost.emit(id);
  }
  createCommentEvent(comment:string,relatedPostId:number)
  {
    this.createComment.emit({comment,relatedPostId})

    
  }
}
