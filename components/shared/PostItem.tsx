import { ICreatePost } from '@/app/types/post'
import React from 'react'

interface Props {
	post: ICreatePost
	index: number
}

export const PostItem: React.FC<Props> = ({ post, index }) => {
	return (
		<div>
			<li
				key={index}
				className='p-4 bg-zinc-900 rounded-xl shadow-md cursor-pointer'
			>
				<h2 className='text-xl font-semibold text-purple-400 mb-2'>
					{post.title}
				</h2>
				<p className='text-gray-300'>{post.content}</p>
			</li>
		</div>
	)
}
