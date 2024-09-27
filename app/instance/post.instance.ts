import { ICreatePost } from '../types/post'
import { axiosInstance } from './axios.instance'

export async function getPosts() {
	return await axiosInstance.get('/post')
}
export async function createPost(data: ICreatePost) {
	try {
		await axiosInstance.post('/post', data)
		return data
	} catch (error) {
		console.log(error)
		throw error
	}
}

export async function updatePost(id: number, data: ICreatePost) {
	try {
		await axiosInstance.put(`/post/${id}`, data)
	} catch (error) {
		console.log(error)
		throw error
	}
}

export async function deletePost(id: number) {
	try {
		await axiosInstance.delete(`/post/${id}`)
	} catch (error) {
		console.log(error)
		throw error
	}
}
