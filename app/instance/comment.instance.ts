import { ICreateComment } from '../types/comment'
import { axiosInstance } from './axios.instance'

export async function getComments() {
	try {
		const response = await axiosInstance.get('/comment')
		return response.data
	} catch (error) {
		console.error('Error fetching comments:', error)
		throw error
	}
}

export async function createComment(item: ICreateComment) {
	try {
		const response = await axiosInstance.post('/comment', item)
		return response.data
	} catch (error) {
		console.error('Error creating comment:', error)
		throw error
	}
}

export async function updatedComment(id: number, item: ICreateComment) {
	try {
		await axiosInstance.put(`/comment/${id}`, item)
	} catch (error) {
		console.error('Error updating comment:', error)
		throw error
	}
}

export async function deleteComment(id: number) {
	try {
		await axiosInstance.delete(`/comment/${id}`)
	} catch (error) {
		console.error('Error deleting comment:', error)
		throw error
	}
}
