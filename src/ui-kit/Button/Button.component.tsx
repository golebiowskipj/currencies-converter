/* eslint-disable @typescript-eslint/no-empty-interface */
import { HTMLProps } from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, type = 'button', fullWidth } = props

  return (
    <StyledButton type={type} onClick={onClick} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  )
}
