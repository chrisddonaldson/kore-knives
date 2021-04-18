import React, { FunctionComponent } from "react"
import Layout from "./layout"
import SEO from "./seo"
import styled from "styled-components"
import { Drill, sampleDrill1 } from "./SampleDrills"
import { Button } from "./Button"
import { TabataEngine } from "./tabataEngine"
import TabataQueue from "./tabataQueue"

interface TabataDisplayInterface {
  drill: Drill
}

export const TabataDisplay: FunctionComponent<TabataDisplayInterface> = ({
  drill,
}) => {
  return (
    <Container>
      <Left>
        <TabataEngine drill={drill} />
      </Left>
      <Right>
        <ScollContainer>
          <TabataQueue drill={drill} />
        </ScollContainer>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

const ScollContainer = styled.div`
  position: absolute;
  width: 100%;
`

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  position: relative;
  overflow-y: scroll;
  min-height: 400px;
`
