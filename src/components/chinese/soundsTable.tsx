import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface SoundsTableInterface {
  test: string
}

export const SoundsTable: FunctionComponent<SoundsTableInterface> = ({
  test,
}) => {
  return <Container>{test}</Container>
}

const Container = styled.div`
  border: 1px solid black;
`
