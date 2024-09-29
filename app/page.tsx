'use client'

import CreatePostForm from '@/components/shared/CreatePostForm'
import Posts from '@/components/shared/Posts'
import { observer } from 'mobx-react-lite'

const Home = observer(() => {
	return (
		<>
			<CreatePostForm />
			<Posts />
		</>
	)
})

export default Home
