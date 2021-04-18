import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

interface ArticleThumbnialInterface {
    article: any
}

export const ArticleThumbnail: React.FC<ArticleThumbnialInterface> = ({article}) =>{
    let featureImage = null
    try{
        featureImage = article.featuredImage.node.localFile.childImageSharp.gatsbyImageData
    }
    catch(e){
        console.error("No feature image for: " + article.title)
    }
return(
<Link to={article.uri}>
    <GatsbyImage image={featureImage} alt={"alt"} className={"bg-cover h-64 "}/>
    <div className={"pt-5"}>
        <h4>{article.title}</h4>
    </div>
</Link>)
}