const RightSideBar = () => {
	return (
		<div className='w-64 p-4 space-y-4'>
			<div className='bg-zinc-900 border-white border-opacity-25 border-12 pr-12 pl-8 py-6 border rounded-[10px] shadow-md text-white'>
				<h2 className='text-xl font-bold mb-4'>Statistics</h2>
				<hr className='my-4 border-gray-500' />
				<div className='space-y-2'>
					<div className='flex gap-12 justify-between'>
						<span>Likes:</span>
						<span>150</span>
					</div>
					<div className='flex gap-12 justify-between'>
						<span>Comments:</span>
						<span>80</span>
					</div>
					<div className='flex gap-12 justify-between'>
						<span>Posts:</span>
						<span>25</span>
					</div>
				</div>
			</div>

			<div className='bg-zinc-900 pl-8 pr-12 p-4 border border-white border-opacity-25 text-white rounded-[10px] shadow-md'>
				<h2 className='text-xl font-bold mb-4'>Friends</h2>
				<hr className='my-4 border-gray-500' />
				<ul className='space-y-2'>
					<li>John Doe</li>
					<li>Jane Smith</li>
					<li>Michael Johnson</li>
					<li>Emily Davis</li>
				</ul>
			</div>
		</div>
	)
}

export default RightSideBar
