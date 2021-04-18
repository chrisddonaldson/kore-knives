import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { TabataEngine } from "../components/tabataEngine"
import { sampleDrill1, sampleDrill3 } from "../components/SampleDrills"
import TabataQueue from "../components/tabataQueue"
import { TabataDisplay } from "../components/tabataDisplay"
import { colours } from "../colours"

const Tabata = () => {
  return (
 <>
      <SEO title="Tabata Timer" />
      <Container>
        <h1
          style={{
            color: "white",
            backgroundColor: colours.green,
            textAlign: "center",
            paddingTop: 16,
          }}
        >
          {sampleDrill1.title}
        </h1>
        <TabataDisplay drill={sampleDrill1} />
      </Container>
   </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: stretch;
  max-width: 960px;
  margin: auto;
  margin-top: 64px;

  /* border: 1px solid red; */
`

export default Tabata
