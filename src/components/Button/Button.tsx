import React, { FC, ButtonHTMLAttributes } from "react"

type ButtonProps = {
  children: React.ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const Button: FC<ButtonProps> = ({ children, type = "button" }) => {
  return <button type={type}>{children}</button>
}

export default Button
