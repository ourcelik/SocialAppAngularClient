import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from 'src/app/models/commentModel';
import { PostDetailsWithPostInfoModel } from 'src/app/models/postDetailsWithPostInfoModel';
import { PostModel } from 'src/app/models/postModel';
import { PostCommentService } from 'src/app/services/post-comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:PostModel;
  postComments:CommentModel[];
  

  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService,
    private postCommentService:PostCommentService

  ) { }
  ngOnInit(): void {
    this.getPost();
    this.getComments();
  }
  getPost()
  {
    this.activatedRoute.params.subscribe(p=>{
      if (p["postId"]) {
        this.postService.getPost(p["postId"]).subscribe(res=>{
          this.post = res.data;
        })
      }
    }

    );
  }
  getComments()
  {
    this.activatedRoute.params.subscribe(p=>{
      if (p["postId"]) {
        this.postCommentService.getPostComments(p["postId"]).subscribe(res=>{
          this.postComments = res.data || [] ;
        })
      }
    })
  }

}
