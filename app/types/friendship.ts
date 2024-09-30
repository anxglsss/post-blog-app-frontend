export interface ICreateFriendship {
	user1Id: number
	user2Id: number
}

export interface IFriendship extends ICreateFriendship {
	id: number
}
