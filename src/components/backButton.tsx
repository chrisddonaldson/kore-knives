import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import Arrow from "../../static/icons/left-arrow.svg"

interface BackButtonInterface {
  link: string
  text: string
}

export const BackButton: FunctionComponent<BackButtonInterface> = ({
  link,
  text,
}) => {
  return (
    <Container to={link}>
      <ArrowStyle fill={"white"} />
      <TextContainer> {text}</TextContainer>
    </Container>
  )
}

const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: white;
  padding-top: 4px;
  padding-bottom: 4px;

  /* margin-left: 20px; */
`
const ArrowStyle = styled(Arrow)`
  display: inline-block;
  /* border: 1px solid green; */
  height: 16px;
  position: relative;
  top: -3px;
`
const TextContainer = styled.div`
  /* border: 1px solid red; */
  display: inline-block;
  color: white;
  padding-left: 4px;
`
