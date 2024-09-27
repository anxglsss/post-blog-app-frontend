export interface ICreatePost {
	title: string
	content: string
	authorId: number
}

export interface IUpdatePost {
	title?: string
	content?: string
	authorId?: number
}
