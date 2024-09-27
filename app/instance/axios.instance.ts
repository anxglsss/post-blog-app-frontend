import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:4400/api',
	headers: {
		'Content-Type': 'application/json',
	},
})
