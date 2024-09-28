'use client'

import { useEffect, useState } from 'react'
import { getPosts } from './instance/post.instance'
import { ICreatePost } from './types/post'

const Home = () => {
	const [posts, setPosts] = useState<ICreatePost[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await getPosts()
				console.log(response.data)
				setPosts(response.data.data)
			} catch (error) {
				setError('Error')
			}
		}

		fetchPosts()
	}, [])

	return (
		<div className='text-white'>
			<h1>Posts</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<ul>
				{posts.map((post, index) => (
					<li key={index}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</li>
				))}
			</ul>
			<div className='flex'>
				<h1>;lkmsd;dcxojmsdpocxes</h1>
				<h1>;lkwdnmcaa;oiwsjnm</h1>
				<h1>oinawcoiaahwenhodsadxs</h1>
				eojmadcfp;oidw;jmcps;ndcmlidnhjcoisjhd f9oxiweruyhirfw4eujhkn.
			</div>
		</div>
	)
}

export default Home
