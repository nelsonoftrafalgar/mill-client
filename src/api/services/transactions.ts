import { NewTransactionParams, Transaction } from '../types/transactions'

import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const getTransactions = async (
	page: number,
	pageSize: number,
	filterBeneficiary: string
) => {
	const { data, headers } = await axios.get<Transaction[]>(
		`${apiUrl}/transactions?_page=${page}&_limit=${pageSize}&beneficiary_like=${filterBeneficiary}`
	)

	return { transactions: data, headers }
}

export const createTransaction = async (payload: NewTransactionParams) => {
	await axios.post(`${apiUrl}/transactions`, payload)
}

export const deleteTransaction = async (id: number) => {
	await axios.delete(`${apiUrl}/transactions/${id}`)
}
