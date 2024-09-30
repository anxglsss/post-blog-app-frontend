export interface ICreateFavorite {
	content: string
	authorId: number
	postId: number
}

export interface IFavorite extends ICreateFavorite {
	id: number
}
