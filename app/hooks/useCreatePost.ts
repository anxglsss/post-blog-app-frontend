import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createPostSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	content: z.string().min(1, { message: 'Content is required' }),
})

export const useCreatePost = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(createPostSchema),
	})

	return { register, handleSubmit, errors, reset }
}
