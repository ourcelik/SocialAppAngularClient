export interface CommentModel{
    postCommentId: number,
    comment: string,
    showComment: boolean,
    relatedPostId: number,
    creatorId: number
}

export type CommentRequiredProps = Pick<CommentModel, "comment" | "relatedPostId">;