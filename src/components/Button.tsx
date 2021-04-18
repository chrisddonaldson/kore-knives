import React from "react"
import styled from "styled-components"

interface ButtonInterface {
  text: string
  onClick: () => void
  disabled: boolean
}

export const Button = ({ text, onClick, disabled }: ButtonInterface) => {
  return (
    <ButtonContainer
      type="button"
      onClick={onClick}
      value={text}
      disabled={disabled}
    />
  )
}

const ButtonContainer = styled.input`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
`
