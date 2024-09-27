import { ICreatePost, IUpdatePost } from '@/app/types/post'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case 'GET':
			return await getAllPosts(req, res)
		case 'POST':
			return await createPost(req, res)
		case 'PUT':
			return await updatePost(req, res)
		case 'DELETE':
			return await deletePost(req, res)
		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
			res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}

const URL = 'http://localhost:4400/api/post'

export async function getAllPosts(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await axios.get(URL)
		res.status(200).json(response.data)
	} catch (error) {
		res.status(500).json({ message: 'Error getting all posts' })
	}
}

export async function getPostById(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const response = await axios.get(`${URL}/${id}`)
		res.status(200).json(response.data)
	} catch (error) {
		res.status(500).json({ message: 'Error getting post by ID' })
	}
}

export async function createPost(req: NextApiRequest, res: NextApiResponse) {
	try {
		const data: ICreatePost = req.body
		const response = await axios.post(URL, data)
		res.status(201).json(response.data)
	} catch (error) {
		res.status(500).json({ message: 'Error creating post' })
	}
}

export async function updatePost(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		const data: IUpdatePost = req.body
		const response = await axios.put(`${URL}/${id}`, data)
		res.status(200).json(response.data)
	} catch (error) {
		res.status(500).json({ message: 'Error updating post' })
	}
}

export async function deletePost(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id } = req.query
		await axios.delete(`${URL}/${id}`)
		res.status(200).json({ message: 'Post deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: 'Error deleting post' })
	}
}
