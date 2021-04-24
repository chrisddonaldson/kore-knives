import React from "react"
import styled from "styled-components"

interface ButtonInterface {
  label: string
  onClick: () => void
  disabled: boolean
}

export const Button = ({ label, onClick, disabled }: ButtonInterface) => {
  return (
    
    <input
      className={"bg-green-600 hover:bg-green-500 transition-all py-3 px-10 rounded-md text-md text-bold text-white inline-block"}
      type="button"
      onClick={onClick}
      value={label}
      disabled={disabled}
    />
  )
}


