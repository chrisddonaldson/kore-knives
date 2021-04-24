import { graphql } from "gatsby"

import styled from "styled-components"
import { colours } from "../colours"
import PageTemplate from "../templates/page-template"
import React, { Suspense, useEffect, useState } from "react"
import { Canvas, useLoader} from 'react-three-fiber'
import { Box } from "../components/3d/box"

import GLTFModal from "../components/3d/GLTFModal"
import { Environment, OrbitControls } from "@react-three/drei"
import { PresetsType } from "@react-three/drei/helpers/environment-assets"


// import { decrement, increment } from "../components/basket/basketSlice"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../components/basket/basketSlice"



// import { useGLTF } from "@react-three/drei"
// import { draco } from'@react-three/drei';
// let camera, scene, renderer;
// let geometry, material, mesh;

const BlogIndex = ({ data, location }) => {

  const count = useSelector(state => state.basket.value)
  const dispatch = useDispatch()

  return (
    <>

    <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    
    <PageTemplate location={location} data={data} />
    </>
    //   <GoldenLayout>
    //     <div>
    //       <PolaroidContainer>
    //         <GatsbyImage image={profile.childImageSharp.gatsbyImageData} />
    //       </PolaroidContainer>
    //     </div>
    //     <div>
    //       <CurvedHeader content={"Welcome!"} />
    //       <PageBody>
    //         <p>
    //           My name is Chris and I am a web developer living in south London.
    //           This website is currently under construction so please ignore the
    //           mess!
    //         </p>
    //         <p>
    //           It's mostly a personal blog set up with Gatsby and react about
    //           some of the various topics I am interested in.
    //         </p>
    //         <p>
    //           I am also using this website as a base point for a few of my
    //           experimental productivity apps.
    //         </p>
    //         <p>
    //           Thanks for stopping by. If you like what you see you can contact
    //           me at:
    //         </p>
    //         <a
    //           href={"mailto: chrisddonaldson@hotmail.com"}
    //           style={{ color: "white" }}
    //         >
    //           chrisddonaldson@hotmail.com
    //         </a>
    //         <h4>Chris</h4>
    //       </PageBody>
    //     </div>
    //   </GoldenLayout>
    //   <FullWidth>
    //     <CurvedHeader content={"Portfolio"} />
    //   </FullWidth>
    //   <PortfolioCarosel articles={portofolioPosts} />
    //   {/* <JeanHomepage /> */}
    // </Layout>
  )
}

const FullWidth = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 60px;
  @media only screen and (max-width: 1180px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const PolaroidContainer = styled.div`
  /* height: 110%; */
  width: 110%;
  border-radius: 30px;
  overflow: hidden;
  background-color: white;
  padding: 15px;
  & > div {
    border-radius: 15px;
    overflow: hidden;
  }
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  transform: rotate(4deg);
  z-index: -2;
  left: 30px;
  position: relative;
  margin-top: -60px;
  top: -60px;
`

const GridSize = "1140px"
const largeGridSize = "1440px"

const GoldenLayout = styled.div`
  max-width: 1140px;
  padding-top: 200px;
  @media only screen and (max-width: 1180px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  margin: 0px auto;
  display: grid;
  grid-template-columns: 5fr 8fr;
  column-gap: 30px;
`

const PageBody = styled.div`
  background-color: ${colours.darkblue};
  padding: 15px;
  color: white;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${GridSize}) {
    margin-left: 20px;
    margin-right: 20px;
  }
  & > a {
    color: white;
  }
`

export default BlogIndex
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(title: { eq: "Home Page" }) {
      id
      title
      lazy_data
    }
    wpMenu(name: { eq: "default" }) {
      menuItems {
        nodes {
          id
          childItems {
            nodes {
              id
              label
              path
            }
          }
          label
          path
          parentId
        }
      }
      name
    }
  }
`
