import { House, SquarePercent, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { Input } from '../../ui/input'

export const Sidebar = () => {
	return (
		<div className='bg-zinc-900 border-12 border-r-[1px] border-white border-opacity-25 w-80 h-screen p-4 text-white'>
			<div className='mb-4 mt-4'>
				<Input
					type='text'
					placeholder='Search...'
					className='w-full py-6 rounded bg-gray-800 text-white'
				/>
			</div>

			<div className='flex flex-col gap-5'>
				<Link
					href='/gfjyhtf'
					className='text-lg hover:bg-slate-800 py-3 rounded-lg pl-2 gap-2 flex'
				>
					<House />
					Home
				</Link>
				<Link
					href='#'
					className=' text-lg hover:bg-slate-800  py-2 rounded-lg pl-2 gap-2 flex'
				>
					<UsersRound />
					Communities
				</Link>
				<Link
					href='#'
					className=' text-lg hover:bg-slate-800  py-2 rounded-lg pl-2 gap-2 flex'
				>
					<SquarePercent />
					Marketplaces
				</Link>
			</div>
			<hr className='my-4 border-slate-600' />

			<div>
				<h2 className='text-lg font-bold mb-2 pl-3'>My Communities</h2>
				{/* Future implementation for communities display */}
			</div>
		</div>
	)
}
