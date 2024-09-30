export interface ICreateRequest {
	requesterId: number
	receiverId: number
}

export interface IRequest extends ICreateRequest {
	id: number
}

export enum Status {
	ACCEPTED = 'ACCEPTED',
	PENDING = 'PENDING',
	REJECTED = 'REJECTED',
}
