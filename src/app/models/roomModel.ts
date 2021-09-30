import { BaseRoomModel } from "./baseRoomModel";
import { IsSubcscribeModel } from "./isSubscribedModel";

export interface RoomModel extends BaseRoomModel { 
    MainRoomId:number;
    isSubscribedModel : IsSubcscribeModel;
} 