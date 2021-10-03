import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { shareReplay } from 'rxjs/operators';
import { CreatePostModel } from 'src/app/models/CreatePostModel';
import { PostDetailsWithPostInfoModel } from 'src/app/models/postDetailsWithPostInfoModel';
import { PostModel } from 'src/app/models/postModel';
import { PostLikeService } from 'src/app/services/post-like.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-channel-content',
  templateUrl: './channel-content.component.html',
  styleUrls: ['./channel-content.component.css']
})
export class ChannelContentComponent implements OnInit {

  posts:PostDetailsWithPostInfoModel[];
  ChannelId:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private postService:PostService,
    private postLikeService:PostLikeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts()
  {
    this.activatedRoute.params.pipe(
      shareReplay()
    )
    .subscribe(params =>{
      this.ChannelId = params["SubChannelId"];
      if(this.ChannelId){
        this.ShowPosts(params["SubChannelId"]);
      }
    });
  }
  ShowPosts(postId: number) {
    this.postService.getPostsWithPostInfoByRoomId(postId).subscribe((res)=>
    {
        console.log(res);
        this.posts = res.data.reverse();
    });
  }
  likePost(postId:number)
  {
    
    this.postLikeService.isAlreadyLikedPost({PostId:postId,UserId:0})
    .subscribe(res=>{
      if (!res.data) {
        this.postLikeService.unLikePost({
          RelatedPostId :postId,
          LikeUserId:0,
          PostLikeId:0
        }).subscribe(res =>{
          this.posts.filter(p=>p.postId == postId)[0].likeCount -=1;
        })
      }
      else{
        this.postLikeService.likePost({
          RelatedPostId :postId,
          LikeUserId:0,
          PostLikeId:0
        }).subscribe(res =>{
          this.posts.filter(p=>p.postId == postId)[0].likeCount +=1;
        })
      }
    })

    
  }
  
  createPost(createPostForm:FormGroup)
  {
    if (createPostForm.valid) {
      let postModel:CreatePostModel = Object.assign({},createPostForm.value);
      postModel.postId = 0,
      postModel.relatedRoomId = this.ChannelId;
      
      this.postService.CreatePost(postModel).subscribe(res=>{
        this.toastrService.success("Postunuz başarılı bir şekilde oluşturuldu");
        this.getPosts();
        createPostForm.reset();

      })

    }
  }

  
}
