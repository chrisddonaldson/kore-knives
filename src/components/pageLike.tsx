import React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

export const PageLike: FunctionComponent = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.div`
  margin: auto;
  max-width: 960px;
`
