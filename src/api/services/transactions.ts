import { NewTransactionParams, Transaction } from '../types/transactions'

import axios from 'axios'

export const getTransactions = async (
	page: number,
	pageSize: number,
	filterBeneficiary: string
) => {
	const { data, headers } = await axios.get<Transaction[]>(
		`http://localhost:3000/transactions?_page=${page}&_limit=${pageSize}&beneficiary_like=${filterBeneficiary}`
	)

	return { transactions: data, headers }
}

export const createTransaction = async (payload: NewTransactionParams) => {
	await axios.post('http://localhost:3000/transactions', payload)
}

export const deleteTransaction = async (id: number) => {
	await axios.delete(`http://localhost:3000/transactions/${id}`)
}
