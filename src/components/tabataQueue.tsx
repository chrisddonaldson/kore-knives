import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Drill } from "./SampleDrills"
import { colours } from "../colours"

interface TabataQueueInterface {
  drill: Drill
}

const TabataQueue = ({ drill }: TabataQueueInterface) => {
  return (
    <div style={{ marginTop: 8 }}>
      {drill.rounds.map((round, index) => {
        let color = "red"

        let description = ""
        if (round) {
          switch (round.type) {
            case "REST":
              color = colours.blue
              description = "Rest"
              break
            case "WORK":
              color = colours.red

              if (round.exrcise) {
                description = round.exrcise
              }
              break
            case "PREPARE":
              color = colours.green

              description = "Prepare"
              break
          }
        }

        return (
          <RowBottom color={color}>
            <TimeBox color={color}>{round.length}s</TimeBox>
            <DescriptionBox>{description}</DescriptionBox>
            <IndexContainer>{index}</IndexContainer>
          </RowBottom>
        )
      })}
    </div>
  )
}

export default TabataQueue

interface RowBottomInterface {
  color: string
}

const RowBottom = styled.div<RowBottomInterface>`
  border-top: 4px solid ${props => props.color};
  background: white;
  margin-bottom: 8px;
  margin-right: 8px;
`
interface IndexContainerInterface {}

const IndexContainer = styled.div<IndexContainerInterface>`
  display: inline-block;
  font-style: italic;
  font-size: 30px;
  position: relative;
  top: 5px;
  left: 0px;

  opacity: 0.2;
`

interface TimerBoxInterface {
  color: string
}
const TimeBox = styled.div<TimerBoxInterface>`
  display: inline-block;
  color: white;
  font-size: 24px;
  padding: 8px;
  background: ${props => props.color};
`
const DescriptionBox = styled.div`
  display: inline-block;
  padding-left: 16px;
  font-size: 20px;
`
const RowTop = styled.div``
