import type { FC } from 'react'

interface ButtonProps {
  children: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default Button
