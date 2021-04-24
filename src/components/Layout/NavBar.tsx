import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import { colours } from "../../colours"
// import ShoppingCart from "../../../static/icons/shopping-cart.svg"
import ShoppingCart from "../../../static/icons/shopping-cart.svg"

// import tailwindConfig from './tailwind.config.js'


interface NavBarInterface {
  title: string
  nav: any
}



export const NavBar = ({ title, nav }: NavBarInterface) => {
  // const fullConfig = resolveConfig(tailwindConfig)
  return (
    <div className={"shadow-lg fixed z-50 w-full bg-gray-100 text-gray-800 top-0"}>
      <div className={" max-w-screen-xl mx-auto grid grid-cols-2 px-5"}>
        <div>
          <Link to="/" className={"inline-block"}>
            <h4 className={"text-gray-100 p-1  bg-gray-800"}>{title}</h4>
          </Link>
        </div>

        <div className={"flex"}>
          {nav.map((item: any, i: number) => {
       
            if (item.parentId === null) {
              return (
                <DropDown className={"inline-block p-2 font-jetbrains"} key={uuidv4()}>
                  <Link to={item.path} className={"text-xs border border-gray-400 border-1 py-1 px-3"}>{item.label}</Link>
                  <div className={"drop-down-list hidden absolute"}>
                    <div className={"relative max-w-sm"}>
                      {item.childItems.nodes.map((v: any, i: number) => (
                        <Link
                        key={uuidv4()}
                          to={v.path}
                          className={
                            "w-full bg-gray-100 block hover:bg-gray-200 text-xs border border-gray-400 border-1 py-1 px-5"
                            
                          }
                        >
                          {v.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </DropDown>
              )
            }
          })}
         
          <Link to={"/basket"} className={"flex align-center justify-center h-full border p-2"}>
              <ShoppingCart className={"h-5 w-5 fill-current text-gray-700 hover:text-gray-600"} />
          </Link>
          <DropDown className={"inline-block p-2 font-jetbrains"} key={uuidv4()}>
                  <Link to={"/3d"} className={"text-xs border border-gray-400 border-1 py-1 px-3" }>3D Editor Demo</Link>
                  </DropDown>

        </div>
      </div>
    </div>
  )
}
const DropDown = styled.div`
  &:hover {
    & > .drop-down-list {
      display: block;
    }
  }
`

const NavigationContainer = styled.div`
  /* border: 1px solid red; */

  display: flex;
`





