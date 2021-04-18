import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'

interface DisplayArticlesInterface { 
    data: any
}

export const DisplayArticles:React.FC<DisplayArticlesInterface> = ({data}) => {

    return(
        <StaticQuery
        query={graphql`
          query {
            allWpPost {
                edges {
                    node {
                        id
                        uri
                        title
                    }
                }
            }
         
        }
        `}
        render={data => {
            const posts = data.allWpPost.edges.map(v=>v.node)
            console.log(posts)
               return(
               <div className={"max-w-screen-xl mx-auto px-5"}>
                <h3>Latest Posts</h3>
                {posts.map(v=> <Link to={v.uri}>
                    <div className={"p-5"}>
                        <h4>
                            {v.title}
                            </h4>
                            </div></Link>)}
            </div>)}
            
            
        }
     />

    )
}