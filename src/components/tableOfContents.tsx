import React from "react"
import Slugger from "github-slugger"
import { Link } from "gatsby"

export const TableOfContents = ({ headings }) => {
  const slugger = new Slugger()
  return (
    <ul>
      {headings
        .filter(heading => heading.depth !== 1)
        .map(heading => (
          <li key={heading.value}>
            <Link to={"#" + slugger.slug(heading.value)}>{heading.value}</Link>
          </li>
        ))}
    </ul>
  )
}
