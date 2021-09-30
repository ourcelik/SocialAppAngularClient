export interface CreatePostModel {
    postId : number;
    createdTime:Date;
    relatedRoomId:number;
    contentMessage:string;
    relatedInfoId:number;
    showPost:boolean;
    isDeleted:boolean;
}