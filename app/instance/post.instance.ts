import { ICreatePost } from '../types/post'
import { axiosInstance } from './axios.instance'

export async function getPosts() {
	const res = axiosInstance.get('/post')
	return (await res).data
}

export async function createPost(data: ICreatePost) {
	try {
		const res = await axiosInstance.post('/post', data)
		return res.data
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
