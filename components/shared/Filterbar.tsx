import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export function MenubarDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger className='hover:bg-gray-200'>File</MenubarTrigger>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
			</MenubarMenu>
		</Menubar>
	)
}
