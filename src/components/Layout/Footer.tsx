import React from "react"
import styled from "styled-components"
import Instagram from "../../../static/icons/instagram.svg"
import LinkedIn from "../../../static/icons/linked-in.svg"
export function Footer() {
  return (
    <div className={"bg-gray-900 py-32"}>
      <div className={"max-w-screen-xl mx-auto px-5"}>
        
        <a
          href={"https://www.instagram.com/chrisddonaldson/"}
          target={"_blank"}
          className={"flex flex-row align-center"}
        >
          <Insta fill={"white"}  />
        <span className={"ml-2"}>Instagram</span>
        </a>
        <br />
      
        <a
          href={"https://www.linkedin.com/in/chris-donaldson-89420098/"}
          target={"_blank"}
          className={"flex flex-row align-center"}
        >
            <Linked fill={"white"} />
          <span className={"ml-2"}>Linked In</span>
        </a>
        <br />
        {/* <a>Code Brie</a> */}
      </div>
    </div>
  )
}

const Insta = styled(Instagram)`
  width: 20px;
  height: auto;
`

const Linked = styled(LinkedIn)`
  width: 20px;
  height: auto;
`

