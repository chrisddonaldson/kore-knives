import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { colours } from "../../colours"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Controller } from "swiper"
SwiperCore.use([Controller])
// Import Swiper styles
import "swiper/swiper.scss"
import { Link } from "gatsby"
interface PortfolioCaroselInterface {
  articles: any
}

// frontmatter {
//   date(formatString: "MMMM DD, YYYY")
//   title
//   description
//   featured_image {
//     childImageSharp {
//       fluid(maxWidth: 600) {
//         ...GatsbyImageSharpFluid
//       }

export function PortfolioCarosel({ articles }: PortfolioCaroselInterface) {
  const [controlledSwiper, setControlledSwiper] = useState(null)
  console.log(controlledSwiper)
  return (
    <Padding>
      <Background>
        <Container>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            style={{ overflow: "visible" }}
          >
            {articles.map(a => {
              let featuredImgFluid = a.frontmatter.featured_image
              return (
                <SwiperSlide>
                  <SwiperCard>
                    <SwiperCardInnerBorder to={a.fields.slug}>
                      <Spacer className="spacer">
                        <GatsbyImage image={featuredImgFluid.childImageSharp.gatsbyImageData} />
                      </Spacer>
                      <TextArea>
                        <h2>{a.frontmatter.title}</h2>
                        <p>{a.frontmatter.description}</p>
                        <p>{a.frontmatter.date}</p>
                      </TextArea>
                    </SwiperCardInnerBorder>
                  </SwiperCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Background>
    </Padding>
  );
}
const shadowFactor = 20
const shadowFactor2 = 40

const TextArea = styled.div`
  z-index: 1;
  background-color: ${colours.green};
  color: ${colours.darkblue};
  width: 100%;
  text-align: left;
  -webkit-box-shadow: ${"0px 0px " +
  shadowFactor +
  "px 0px rgba(0, 0, 0, 0.2)"};
  -moz-box-shadow: ${"0px 0px " + shadowFactor2 + "px 0px rgba(0, 0, 0, 0.2)"};
  box-shadow: ${"0px 0px " + shadowFactor2 + "px 0px rgba(0, 0, 0, 0.2)"};
  /* margin: 15px; */
  max-height: 300px;
  height: 300px;
  & > h2 {
    margin: 0px 15px;
  }
  & > p {
    margin: 0px 15px;
  }
`

const SwiperCardInnerBorder = styled(Link)`
  margin: 0;
  padding: 0;
  border: 1px solid white;
  /* max-width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Spacer = styled.div`
  width: 100%;
  height: 100%;
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  overflow: hidden;
  object-fit: contain;
  & > div {
    object-fit: contain;
    width: 600px;
    height: 100%;
  }
`
const SwiperCard = styled.div`
  border: 1px solid black;
  /* max-width: 300px; */
  height: 480px;
  -webkit-box-shadow: ${"0px 0px " +
  shadowFactor +
  "px 0px rgba(0, 0, 0, 0.4)"};
  -moz-box-shadow: ${"0px 0px " + shadowFactor + "px 0px rgba(0, 0, 0, 0.4)"};
  box-shadow: ${"0px 0px " + shadowFactor + "px 0px rgba(0, 0, 0, 0.4)"};
  transition: all 0.4s;
  position: relative;
  top: 0px;
  &:hover {
    top: -10px;
    div {
      /* border: 1px solid red; */
      > div {
        > .spacer {
          > div {
            width: 650px;
          }
        }
      }
    }
  }
`

const cardOverlap = 100

const Padding = styled.div`
  padding-top: 30px;
`

const Background = styled.div`
  background-color: ${colours.darkerblue};
  margin-top: ${cardOverlap + "px"};
  -webkit-box-shadow: ${"0px 0px " +
  shadowFactor +
  "px 0px rgba(0, 0, 0, 0.4)"};
  -moz-box-shadow: ${"0px 0px " + shadowFactor2 + "px 0px rgba(0, 0, 0, 0.4)"};
  box-shadow: ${"0px 0px " + shadowFactor2 + "px 0px rgba(0, 0, 0, 0.4)"};
  /* margin-bottom: ${"-" + cardOverlap2 + "px"}; */
  overflow: hidden;
`

const Container = styled.div`
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1140px;
  /* border: 1px solid red; */
  top: ${"-" + cardOverlap + "px"};

  margin: auto;

  @media only screen and (max-width: 1180px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
