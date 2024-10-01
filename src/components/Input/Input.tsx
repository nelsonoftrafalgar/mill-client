import { Input as AntdInput, InputRef } from 'antd'
import { Container, ErrorMessage, Label } from './styles'

import { InputProps } from './types'
import { forwardRef } from 'react'

export const Input = forwardRef<InputRef, InputProps>(
	({ label, error, name, ...rest }, ref) => {
		const errorMessageId = error ? `${error}: ${name}` : undefined
		return (
			<Container>
				{label && <Label htmlFor={name}>{label}</Label>}
				<AntdInput
					{...rest}
					ref={ref}
					name={name}
					id={name}
					aria-labelledby={label ? name : undefined}
					aria-label={label ? name : undefined}
					aria-invalid={!!error}
					aria-describedby={errorMessageId}
				/>
				{error && <ErrorMessage id={errorMessageId}>{error}</ErrorMessage>}
			</Container>
		)
	}
)

Input.displayName = 'Input'
