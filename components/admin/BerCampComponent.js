import React from 'react'
import { BreadcrumbLink, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icon'
function BerCampComponent({ location }) {
	return (
		<div>
			<Breadcrumb spacing='8px' separator='-' p={5} m={5}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>alwefage news</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href='/admin/dashboard'>dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				{
					location.map(li => {
						return (
							<BreadcrumbItem isCurrentPage key={li}>
								<BreadcrumbLink href='#'>{li}</BreadcrumbLink>
							</BreadcrumbItem>)
					})
				}
			</Breadcrumb>
		</div>
	)
}

export default BerCampComponent
