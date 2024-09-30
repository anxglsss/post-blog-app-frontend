export interface ICreateUser {
	email: string
	password: string
	name: string
}

export interface IUser extends ICreateUser {
	id: number
}
