import { graphql } from "gatsby"
import React, { Suspense, useEffect, useState } from "react"
import styled from "styled-components"
import { colours } from "../colours"
import PageTemplate from "../templates/page-template"
import { Canvas, useLoader} from 'react-three-fiber'
import { Box } from "../components/3d/box"

import GLTFModal from "../components/3d/GLTFModal"
import { Environment, OrbitControls } from "@react-three/drei"
import { PresetsType } from "@react-three/drei/helpers/environment-assets"



// import { useGLTF } from "@react-three/drei"
// import { draco } from'@react-three/drei';
// let camera, scene, renderer;
// let geometry, material, mesh;

const BlogIndex = ({ data, location }) => {
  // const modelURL = "https://cms.kore-knives.com/wp-content/uploads/2021/04/Knife_Full.gltf"
  const modelURL = "models/Knife_Full.gltf"
  const [background, setBackground] = useState<PresetsType>("warehouse")
  return (
    <>
    <div  className={"mx-auto relative"} style={{height: 600, width: "100%"}}>
      <Canvas>
      <Suspense fallback={null}>
      <Environment
      background={true} // Whether to affect scene.background
      // files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} // Array of cubemap files OR single equirectangular file
      // path={'/'} // Path to the above file(s)
      preset={background} // Preset string (overrides files and path)
      // scene={undefined} // adds the ability to pass a custom THREE.Scene
    />
    </Suspense>
        <OrbitControls/>
        <perspectiveCamera fov={90} aspect={1} />
        {/* <ambientLight /> */}
        {/* <hemisphereLight args={["white", 2, 2]} />
        <spotLight
        intensity={0.2}
        position={[20, 25, 14]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
        <pointLight position={[10, 10, 10]} /> */}
        <Box position={[-2.2, 0, 0]} />
        <Box position={[2.2, 0, 0]} />
        <Suspense fallback={<Box />}>{<GLTFModal scenePath={modelURL} position={[0,0,0]} rotation={[0,0,0]} scale={10}/>}</Suspense>
  </Canvas>
  <div className={"absolute left-5 bottom-5"}>
  {/* <input type="button" value="Studio" onClick={()=>setBackground("studio")} /> */}
  <br/>
  <input type="button" value="Warehouse" onClick={()=>setBackground("warehouse")} />
  <br/>
  <input type="button" value="City" onClick={()=>setBackground("city")} />
  <br/>
  <input type="button" value="Dawn" onClick={()=>setBackground("dawn")} />
  <br/>
  <input type="button" value="Loby" onClick={()=>setBackground("lobby")} />
  <br/>
  <input type="button" value="Apartment" onClick={()=>setBackground("apartment")} />
  <br/>
  <input type="button" value="Park" onClick={()=>setBackground("park")} />

  <p className="mx-auto max-w-xl py-10 text-white">
    The model is loaded in from wordpress media (almost, just need to add cors to wordpress). It uses a box as a place holder as it is loading. This means we can add a model to each product all via the cms!
  </p>
  <p className="mx-auto max-w-xl pb-10 text-white">
    The boxes have a hover and a on click state. The scene has orbit controls which can be customised. I have toggled the background to show but we can hide that too.
  </p>
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
