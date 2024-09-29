import { postStore } from '@/app/stores/post.store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PostItem } from './PostItem'

const Posts = observer(() => {
	useEffect(() => {
		postStore.getPosts()
	}, [])

	const isEmpty = postStore.posts.length === 0

	return (
		<div className='bg-zinc-900 w-[118vh] bg-opacity-30 px-6 py-4 rounded-xl mt-3 overflow-y-auto max-h-[56vh] scrollbar-hidden border border-white border-opacity-25'>
			<ul className='space-y-4'>
				{isEmpty ? (
					<p className='text-white'>No posts available</p>
				) : (
					postStore.posts.map((post, index) => (
						<PostItem key={index} post={post} index={index} />
					))
				)}
			</ul>
		</div>
	)
})

export default Posts
