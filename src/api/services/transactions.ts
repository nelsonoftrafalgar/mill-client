import { Transaction } from '../types/transactions'
import axios from 'axios'

export const getTransactions = async (page: number, pageSize: number) => {
	const { data, headers } = await axios.get<Transaction[]>(
		`https://mill-server.onrender.com/transactions?_page=${page}&_limit=${pageSize}`
	)

	return { transactions: data, headers }
}
