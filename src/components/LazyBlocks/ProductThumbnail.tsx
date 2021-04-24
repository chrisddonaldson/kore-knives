import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
interface ProductThumbnialInterface {
    Product: any
}

export const ProductThumbnail: React.FC<ProductThumbnialInterface> = ({product}) =>{
    let featureImage = null
    try{
        featureImage = product.featuredImage.node.localFile.childImageSharp.gatsbyImageData
    }
    catch(e){
        console.error("No feature image for: " + product.title)
    }

    const knifeLabels= ["Type", "Total Length", "Cutting Edge length", "Blade Height", "Weight", "Handle Material", "Liner Material", "Blade Material", "Rivet Material", "Serial No."]


    return(



<StlyedLink to={product.uri} className={"grid"} key={uuidv4()}>
    <Top className={"z-10 flex justify-end relative"} >
        <div className={"bg-green-900 z-10 max-w-2/5 w-2/5  h-full absolute -top-5 -right-5 shadow-lg" }> </div>
    </Top>
    <Background className={"bg-green-400  shadow-xl h-72"}>
    <GatsbyImage image={featureImage} alt={"alt"} className={"bg-cover h-80 z-20 transform -rotate-45 scale"}/>
    </Background>
    <Card className={"bg-white overflow-hidden rounded-md shadow-lg mt-14 mx-5 "}>
        
        <h4 className={"px-5 py-5"}>{product.title}</h4>

        <div className={"bg-gray-200 px-5 py-5"}>

       
        <table className={"w-full text-sm "}>
            <thead>
            <tr>
            <th className={"text-xs text-left uppercase"}>
             stat
             </th>
            <th className={"text-xs text-left uppercase"}>
            value
        </th>
            </tr>
            </thead>
            <tbody>
    {knifeLabels.map(v=>{
      
        return(
            <tr key={uuidv4()} >
                <td className={"mr-1"}>
                    <span className={"text-xs"}>{v}</span>
                </td>
                <td>
                <span className={"text-xs"}>100</span>
                </td>
            </tr>
        )
    })}
    </tbody>
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
  grid-template-rows: 1.1fr 0.8fr 1.3fr;

`