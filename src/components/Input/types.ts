import { InputProps as AntdInputProps } from 'antd'

export interface InputProps extends AntdInputProps {
	label?: string
	error?: string
}
