import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-new-post',
  templateUrl: './channel-new-post.component.html',
  styleUrls: ['./channel-new-post.component.css']
})
export class ChannelNewPostComponent implements OnInit {

  CreatePostForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  @Output() createPost = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.createCreatePostForm();
  }

  createCreatePostForm(){
    this.CreatePostForm = this.formBuilder.group({
      contentMessage : ["",Validators.required]
    });
  }

  createPostEvent(formGroup:FormGroup)
  {
    this.createPost.emit(formGroup);
  }

}
