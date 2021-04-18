import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { colours } from "../../colours"
import { GatsbyImage } from "gatsby-plugin-image"
interface GoldenLayoutInterface {
  image: any
  content: any
  invert: boolean
}

export const GoldenLayout: FunctionComponent<GoldenLayoutInterface> = ({
  image,
  content,
  invert,
}) => {
  console.log(image)
  return (
    <GoldenLayoutStyle invert={invert}>
      <div><GatsbyImage image={image.gatsbyImageData} /></div>
      <div>{content}</div>
    </GoldenLayoutStyle>
  )
}

interface GoldenLayoutStyle {
  invert: boolean
}
const GoldenLayoutStyle = styled.div<GoldenLayoutStyle>`
  max-width: 1140px;
  @media only screen and (max-width: 1180px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  margin: 0px auto;
  display: grid;
  grid-template-columns: ${props => (props.invert ? "8fr 5fr" : "5fr 8fr")};
  column-gap: 30px;
  padding-bottom: 30px;
`
