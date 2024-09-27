import React from 'react'

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={`mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
			{children}
		</div>
	)
}

export default Container
