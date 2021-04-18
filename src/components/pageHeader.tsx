import React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"
import { colours } from "../colours"

export const PageHeader: FunctionComponent = ({ children }) => {
  return <Main>{children}</Main>
}

const Main = styled.div`
  /* height: 100%; */
  padding: 16px;
  background-color: ${colours.green};
  color: white;
  color: ${colours.darkblue};
  > h1 {
    margin: 0px;
    padding: 0px;
  }
  > p {
    margin: 0px;
    padding: 0px;
  }
`
