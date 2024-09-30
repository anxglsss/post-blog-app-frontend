import { ICreateRequest, Status } from '../types/request'
import { axiosInstance } from './axios.instance'

export async function createRequest(item: ICreateRequest) {
	try {
		const response = await axiosInstance.post('/request', item)
		return response.data
	} catch (error) {
		console.error('Error creating request:', error)
		throw error
	}
}

export async function updateRequest(id: number, status: Status) {
	try {
		await axiosInstance.patch('/request', { id, status })
	} catch (error) {
		console.error('Error with updating request:', error)
		throw error
	}
}

export async function deleteRequest(id: number) {
	try {
		await axiosInstance.delete(`/request/${id}`)
	} catch (error) {
		console.error('Error with deleting request:', error)
		throw error
	}
}

export async function getRequestsByUser(userId: number) {
	try {
		const response = await axiosInstance.get(`/request/${userId}`)
		return response.data
	} catch (error) {
		console.error('Error with get requests by user', error)
		throw error
	}
}
