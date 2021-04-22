import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

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

    const knifeLabels= ["Type", "Total Length", "Cutting Edge lenght", "Blade Height", "Weight", "Handle Material", "Liner Material", "Blade Material", "Rivet Material", "Serial No."]
return(

<StlyedLink to={article.uri} className={"grid "}>
    <Top className={"z-10 flex justify-end relative"} >
        <div className={"bg-green-900 z-10 max-w-2/5 w-2/5  h-full absolute -top-5 -right-5 shadow-lg" }> </div>
    </Top>
    <Background className={"bg-green-400  shadow-xl"}>
    {/* <GatsbyImage image={featureImage} alt={"alt"} className={"bg-cover h-64 "}/> */}
    </Background>
    <Card className={"bg-white p-5 m-5 rounded-md shadow-lg"}>
    <div className={"pb-1 "}>
        <h4>{article.title}</h4>
        {console.log(article)}
        <table className={"w-full"}>
            <tr>
                <th>
stat
                </th>
                <th>
value
</th>
            </tr>
    {knifeLabels.map(v=>{
      
        return(
            <tr>
                <td className={"mr-1"}>
                    <span >{v}</span>
                </td>
                <td>
                <span>100</span>
                </td>
            </tr>
        )
    })}
    </table>
    </div>
    </Card>
</StlyedLink>)
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
  grid-template-rows: 1.1fr 0.6fr 1.3fr;

`