import { axiosInstance } from './axios.instance'

export async function getFavorites() {
	try {
		const response = await axiosInstance.get('/favorite')
		return response.data
	} catch (error) {
		console.error('Error fetching favorites:', error)
		throw error
	}
}

export async function createFavorite(item: ICreateComment) {
	try {
		const response = await axiosInstance.post('/favorite', item)
		return response.data
	} catch (error) {
		console.error('Error creating favorite:', error)
		throw error
	}
}

export async function updateFavorite(id: number, item: ICreateComment) {
	try {
		await axiosInstance.put(`/favorite/${id}`, item)
	} catch (error) {
		console.error('Error updating favorite:', error)
		throw error
	}
}

export async function deleteFavorite(id: number) {
	try {
		await axiosInstance.delete(`/favorite/${id}`)
	} catch (error) {
		console.error('Error deleting favorite:', error)
		throw error
	}
}
