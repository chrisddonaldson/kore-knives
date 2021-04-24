import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
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

    const knifeLabels= ["Type", "Total Length", "Cutting Edge length", "Blade Height", "Weight", "Handle Material", "Liner Material", "Blade Material", "Rivet Material", "Serial No."]


    return(



<Link to={article.uri} className={"grid"} key={uuidv4()}>

    <Card className={"bg-white overflow-hidden rounded-md shadow-lg mt-14 mx-5 "}>
    <GatsbyImage image={featureImage} alt={"alt"} className={"bg-cover h-80 z-20 transform"}/>
        <h4 className={"px-5 py-5"}>{article.title}</h4>

        <div className={"bg-gray-200 px-5"}>

       

    </div>
    </Card>
</Link>)
}

const Top = styled.div`
  grid-area: 1 / 1 / 2 / 2;

`

const Background = styled.div`
  grid-area: 1 / 1 / 3 / 2;

`
const Card = styled.div`
grid-area: 2 / 1 / 4 / 2;

`

const StlyedLink = styled(Link)`
  grid-template-rows: 1.1fr 0.8fr 1.3fr;

`