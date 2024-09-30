export interface ICreateComment {
	content: string
	authorId: number
	postId: number
}

export interface IComment extends ICreateComment {
	id: number
}
