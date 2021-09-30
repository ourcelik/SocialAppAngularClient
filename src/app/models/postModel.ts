export interface PostModel {
    postId : number;
    createdTime:Date;
    relatedRoomId:number;
    creatorId:number;
    contentMessage:string;
    relatedInfoId:number;
    showPost:boolean;
    isDeleted:boolean;
}