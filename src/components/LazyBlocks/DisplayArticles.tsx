import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'

import { ArticleThumbnail } from './ArticleThumbnail'
import { v4 as uuidv4 } from 'uuid';
import { ProductThumbnail } from './ProductThumbnail';
import { Button } from '../Button';
interface DisplayArticlesInterface { 
    data: any
}

export const DisplayArticles:React.FC<DisplayArticlesInterface> = ({data}) => {

    let showArticles= false
    let showProducts= false
    let singleRow= false


    try{
        showArticles =  data.attrs["show-articles"]
        showProducts =  data.attrs["show-products"]
        singleRow =  data.attrs["single-row"]
    }catch(e){
        console.error(e)
    }
    console.log(singleRow)
    return(
        <StaticQuery
        key={uuidv4()}
        query={graphql`
          query            
          {
            allWpPost {
                edges {
                node {
                    id
                    uri
                    title
                    featuredImage {
                    node {
                        localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                        }
                    }
                    }
                }
                }
            }
            allWpProduct {
                edges {
                node {
                    id
                    uri
                    title
                    featuredImage {
                    node {
                        localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                        }
                    }
                    }
                }
                }
            }
        }

        `}
        render={data => {
            const posts = data.allWpPost.edges.map(v=>v.node)
            const products = data.allWpProduct.edges.map(v=>v.node)

               return(

               <div className={"max-w-screen-xl mx-auto px-5 my-16 "}>
                
                {showArticles ? (
                <div className={"grid md:grid-cols-3 sm:grid-cols-2 mb-5 gap-6"}>
                    {posts.map((v,i)=> {
                    if(singleRow && i>=3) return null
                    return <ArticleThumbnail article={v} key={uuidv4()}/>
                    })}
                  
                </div>):(null)}
                    {showProducts ? (
                <div className={"grid md:grid-cols-3 sm:grid-cols-2 mb-5 gap-20"}>
                {products.map((v,i)=> {
                 if(singleRow && i>=3) return null
                 return <ProductThumbnail product={v} key={uuidv4()}/>}
                )
                }
                
       
                </div>):(null)}
          
            </div>
            )}
        }
     />

    )
}