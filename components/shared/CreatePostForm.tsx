import { useCreatePost } from '@/app/hooks/useCreatePost'
import { postStore } from '@/app/stores/post.store'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { Button } from '../ui/button'

interface CreatePostFormProps {
	title: string
	content: string
}

const CreatePostForm: React.FC = () => {
	const { register, handleSubmit, errors, reset } = useCreatePost()

	const onSubmit: SubmitHandler<FieldValues> = data => {
		const postData: CreatePostFormProps = {
			title: data.title,
			content: data.content,
		}
		const newData = {
			...postData,
			authorId: 1,
		}
		async function handleCreatePost() {
			try {
				await postStore.createPost(newData)
				reset()
			} catch (error) {
				console.log(error)
			}
		}
		handleCreatePost()
	}

	return (
		<form
			className='flex flex-col bg-zinc-900 rounded-xl px-6 py-2 border border-white border-opacity-25'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='flex flex-col space-y-1 w-full'>
				<div>
					<input
						type='text'
						{...register('title')}
						id='title'
						className='mt-1 p-2 pl-4 bg-gray-600 bg-opacity-25 text-sm text-white focus:outline-none rounded-xl w-full'
						placeholder='Enter the post title'
					/>
				</div>

				<div>
					<textarea
						id='description'
						{...register('content')}
						className='resize-none p-2 pl-4 bg-gray-600 bg-opacity-25 text-sm text-white focus:outline-none rounded-xl w-full'
						placeholder='Enter the post description'
					/>
				</div>

				<div className='flex justify-between'>
					<div className='text-white'>Future features</div>
					<Button
						type='submit'
						className='bg-opacity-50 bg-zinc-700 text-white px-5 py-2 rounded hover:bg-zinc-600 mb-1'
					>
						Submit
					</Button>
				</div>
			</div>
		</form>
	)
}

export default CreatePostForm
