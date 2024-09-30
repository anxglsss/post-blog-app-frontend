import { ICreateFriendship } from '../types/friendship'
import { axiosInstance } from './axios.instance'

export async function createFriendship(item: ICreateFriendship) {
	try {
		const response = await axiosInstance.post('/friendship', item)
		return response.data
	} catch (error) {
		console.error('Error creating friendship:', error)
		throw error
	}
}

export async function deleteFriendship(id: number) {
	try {
		await axiosInstance.delete(`/friendship/${id}`)
	} catch (error) {
		console.error('Error deleting friendship:', error)
		throw error
	}
}

export async function getFriendsForUser(userId: number) {
	try {
		const response = await axiosInstance.get(`/friendship/${userId}`)
		return response.data
	} catch (error) {
		console.error('Error fetching friends for user:', error)
		throw error
	}
}
