import { useEffect, useState } from 'react'

import { enableTransactionsQuery } from '../store/transactions'
import { useSetAtom } from 'jotai'

export const useFilterTransactionsDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	const setEnableTransactionsQuery = useSetAtom(enableTransactionsQuery)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
			setEnableTransactionsQuery(true)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay, setEnableTransactionsQuery])

	return { debouncedValue }
}
