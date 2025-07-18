import type { ReactElement } from 'react'

export default interface AppRoute {
	path: string
	element: ReactElement
}
