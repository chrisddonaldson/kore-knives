import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { colours } from "../../colours"

interface NavBarInterface {
  title: string
  nav: any
}



export const NavBar = ({ title, nav }: NavBarInterface) => {
  return (
    <div className={"shadow-lg fixed z-50 w-full bg-gray-700 text-white top-0"}>
      <div className={" max-w-screen-xl mx-auto grid grid-cols-2"}>
        <div>
          <Link to="/" className={"inline-block"}>
            <h4 className={"text-gray-700 p-1  bg-green-400"}>{title}</h4>
          </Link>
        </div>

        <NavigationContainer>
          {nav.map((item: any, i: number) => {
            // console.log(item)
            if (item.parentId === null) {
              return (
                <DropDown className={"inline-block p-2"}>
                  <Link to={item.path}>{item.label}</Link>
                  <div className={"drop-down-list hidden absolute"}>
                    <div className={"relative max-w-sm"}>
                      {item.childItems.nodes.map((v: any, i: number) => (
                        <Link
                          to={v.path}
                          className={
                            "p-5 w-full bg-gray-700 block hover:bg-gray-800"
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
        </NavigationContainer>
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





