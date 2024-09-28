import { Bell, House } from 'lucide-react'

const HomeNavbar = () => {
	return (
		<nav className='bg-zinc-900 border-b border-white border-opacity-25 w-[1200px] 2xl:w-[1600px] mx-auto p-4 flex justify-between items-center'>
			<div className='flex items-center justify-center gap-2 pl-4'>
				<House size={32} color='white' />
				<h1 className='text-white text-3xl font-bold'>Home</h1>
			</div>

			<div className='flex items-center gap-4'>
				<Bell className='cursor-pointer' color='white' />
				<button className='bg-green-500 px-4 py-2 rounded-[10px] text-white'>
					Sign Up
				</button>
			</div>
		</nav>
	)
}

export default HomeNavbar
