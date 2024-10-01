import * as yup from 'yup'

export const transactionSchema = yup.object({
	amount: yup.number().min(0).required('Required field'),
	account: yup
		.string()
		.min(26, 'Account must have exactly 26 numbers')
		.max(26, 'Account must have exactly 26 numbers')
		.matches(/^[0-9]+$/, {
			excludeEmptyString: true,
			message: 'Only numbers are allowed'
		})
		.required('Required field'),
	address: yup
		.string()
		.max(100)
		.matches(/^[A-Za-z0-9-\s,]+$/, {
			excludeEmptyString: true,
			message: 'Invalid characters'
		})
		.required('Required field'),
	description: yup
		.string()
		.max(100)
		.matches(/^[A-Za-z0-9-\s,.]+$/, {
			excludeEmptyString: true,
			message: 'Invalid characters'
		})
		.required('Required field'),
	beneficiary: yup
		.string()
		.matches(/^[A-Za-z0-9-\s,.]+$/, {
			excludeEmptyString: true,
			message: 'Invalid characters'
		})
		.max(100)
		.required('Required field')
})
