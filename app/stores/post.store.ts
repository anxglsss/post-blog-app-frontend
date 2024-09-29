import { makeAutoObservable, runInAction } from 'mobx'
import toast from 'react-hot-toast'
import {
	createPost,
	deletePost,
	getPosts,
	updatePost,
} from '../instance/post.instance'
import { ICreatePost, IPost } from '../types/post'

class PostStore {
	posts: IPost[] = []
	loading: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	async getPosts() {
		this.loading = true
		try {
			const response = await getPosts()
			runInAction(() => {
				this.posts = response
				this.loading = false
			})
		} catch (error) {
			toast.error('Error getting posts')
			throw error
		}
	}

	async createPost(data: ICreatePost) {
		this.loading = true
		try {
			const response = await createPost(data)
			runInAction(() => {
				this.posts.push(response)
				this.loading = false
				toast.success('Post created successfully')
			})
		} catch (error) {
			toast.error('Error creating post')
			throw error
		}
	}

	async updatePost(id: number, data: ICreatePost) {
		this.loading = true
		try {
			await updatePost(id, data)
			runInAction(() => {
				const index = this.posts.findIndex(post => post.id === id)
				this.posts[index] = { ...this.posts[index], ...data }
				this.loading = false
				toast.success('Post updated successfully')
			})
		} catch (error) {
			toast.error('Error updating post')
			throw error
		}
	}

	async deletePost(id: number) {
		this.loading = true
		try {
			await deletePost(id)
			runInAction(() => {
				this.posts = this.posts.filter(post => post.id !== id)
				this.loading = false
				toast.success('Post deleted successfully')
			})
		} catch (error) {
			toast.error('Error deleting post')
			throw error
		}
	}
}

export const postStore = new PostStore()
