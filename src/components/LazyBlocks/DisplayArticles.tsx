import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { ArticleThumbnail } from './ArticleThumbnail'
interface DisplayArticlesInterface { 
    data: any
}

export const DisplayArticles:React.FC<DisplayArticlesInterface> = ({data}) => {

    return(
        <StaticQuery
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
            console.log(posts)
               return(
               <div className={"max-w-screen-xl mx-auto px-5 my-16"}>
                <h3 >Latest Posts</h3>
                <hr className={"my-5"}/>
                <div className={"grid md:grid-cols-3 sm:grid-cols-2 mb-5 gap-6"}>
                    {posts.map(v=> <ArticleThumbnail article={v}/>)}
                  
                </div>
                <h3>Latest Products</h3>
                <hr className={"my-5"}/>
                <div className={"grid md:grid-cols-3 sm:grid-cols-2 mb-5 gap-20"}>
                {products.map(v=> <ArticleThumbnail article={v}/>)}
                </div>
            </div>
            )}
        }
     />

    )
}