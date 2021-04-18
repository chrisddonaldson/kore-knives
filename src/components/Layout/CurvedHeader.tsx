import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { colours } from "../../colours"

interface CurvedHeaderInterface {
  content: any
}

export const CurvedHeader: FunctionComponent<CurvedHeaderInterface> = ({
  content,
}) => {
  return (
    <Hero>
      <HeroText>{content}</HeroText>
    </Hero>
  )
}

const HeroText = styled.h1`
  font-size: 7rem;
  color: ${colours.darkblue};
  margin: 0px;
  margin-left: 15px;
`

const Hero = styled.div`
  background-color: ${colours.green};
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  border-top-right-radius: 64px;
`
