export interface UpdateProfileModel {
    profileId:number;
    genderId: number;
    height: string;
    name: string;
    RelationshipStatus: boolean | string;
    surname: string;
    weight: string;
    birthdate:Date;

}