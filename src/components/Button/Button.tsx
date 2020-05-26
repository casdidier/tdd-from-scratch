import * as React from 'react'

interface Button {
  variant?: "primary" | "secondary"
}

const Button: React.FunctionComponent<Button> = ({ variant = "primary", children }) => {
  return <button className={`button button-${variant}`}>{children}</button>
}

export { Button }