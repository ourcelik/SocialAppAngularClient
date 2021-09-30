import { PostModel } from "./postModel";

export interface PostDetailsWithPostInfoModel extends PostModel{
    commentCount:number;
    likeCount:number;
    startedContactCount:number;
}