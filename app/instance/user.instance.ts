import { ICreateUser, IUser } from '../types/user'
import { axiosInstance } from './axios.instance'

export async function createUser(data: ICreateUser) {
	try {
		const response = await axiosInstance.post('/user', data)
		return response.data
	} catch (error) {
		console.error('Error creating user:', error)
		throw error
	}
}

export async function getUsers() {
	try {
		const response = await axiosInstance.get('/user')
		return response.data
	} catch (error) {
		console.error('Error fetching users:', error)
		throw error
	}
}

export async function getUserById(id: number) {
	try {
		const response = await axiosInstance.get(`/user/${id}`)
		return response.data
	} catch (error) {
		console.error(`Error fetching user with id ${id}:`, error)
		throw error
	}
}

export async function updateUser(id: number, data: IUser) {
	try {
		await axiosInstance.patch(`/user/${id}`, data)
	} catch (error) {
		console.error(`Error updating user with id ${id}:`, error)
		throw error
	}
}

export async function deleteUser(id: number) {
	try {
		await axiosInstance.delete(`/user/${id}`)
	} catch (error) {
		console.error(`Error deleting user with id ${id}:`, error)
		throw error
	}
}
