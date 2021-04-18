import React from "react"
import styled from "styled-components"
import Logo from "../../../content/assets/logo.png"
export const JeanHomepageLayerOne = () => {
  return (
    <Container>
      <Left>
        <JeanCard>
          <LogoImg src={Logo}></LogoImg>
        </JeanCard>
      </Left>
      <Right>
        <h1>Organise your life</h1>
        <LineContainer>
          <p>Automate descions.</p>
          <p>Focus on what matters.</p>
          <p>Get more done.</p>
        </LineContainer>
      </Right>
    </Container>
  )
}

const LogoImg = styled.img`
  max-width: 400px;
  height: auto;
`

const Container = styled.div`
  display: flex;
  background: rgb(36, 101, 226);
  background: linear-gradient(
    180deg,
    rgba(36, 101, 226, 1) -3%,
    rgba(112, 241, 176, 1) 100%
  );
  padding-top: 80px;
`

const Left = styled.div`
  flex: 1;
  min-height: 400px;
  padding-right: 16px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

const Image = styled.img`
  flex: 1;
  max-height: 200px;
`
const Right = styled.div`
  flex: 1;
  min-height: 400px;
  color: white;
  border: 1px solid black;
`
const LineContainer = styled.div`
  border-left: 5px solid white;
  padding-left: 16px;
`

const JeanCard = styled.div`
  background-color: white;
  padding: 16px;
`
