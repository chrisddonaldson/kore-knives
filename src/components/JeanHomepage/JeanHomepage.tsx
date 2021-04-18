import React from "react"
import styled from "styled-components"
import { JeanHomepageLayerOne } from "./JeanHomeLayerOne"

export const JeanHomepage = () => {
  return (
    <Container>
      <JeanHomepageLayerOne />
    </Container>
  )
}

const Container = styled.div`
  border-top-right-radius: 380px;
  max-width: 940px;
  margin: auto;
  margin-top: 200px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 80px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 80px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(0, 0, 0, 0.25);
`
