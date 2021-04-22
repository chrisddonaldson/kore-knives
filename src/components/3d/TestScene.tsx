import React, { Suspense, useEffect, useState } from "react"
import { Canvas, useLoader} from 'react-three-fiber'
import { Box } from "./box"

import GLTFModal from "./GLTFModal"
import { Environment, OrbitControls } from "@react-three/drei"
import { PresetsType } from "@react-three/drei/helpers/environment-assets"
import { Link } from "gatsby"

export const TestScene = () => {

  // const modelURL = "https://cms.kore-knives.com/wp-content/uploads/2021/04/Knife_Full.gltf"
  const modelURL = "models/Knife_Full.gltf"
  const [background, setBackground] = useState<PresetsType>("warehouse")
    return(

<div  className={"mx-auto relative"} style={{height: "100vh", width: "100%"}}>
<Canvas>
<Suspense fallback={null}>
<Environment
background={false} // Whether to affect scene.background
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
<div className={"absolute left-5 bottom-5 bg-white p-5 rounded-md shadow-lg grid grid-cols-2"}>
<div>
        <Link to={"/"}><h5> Go Home</h5></Link>
        </div>
    <div>
        <h5>Background</h5>
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
        </div>
    </div>
    
</div>

    )
}