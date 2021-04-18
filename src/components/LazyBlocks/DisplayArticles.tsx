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
            allWpWorkoutPost {
                edges {
                    node {
                        id
                        uri
                        title
                    }
                }
            }
            allWpChinesePost {
                edges {
                    node {
                        id
                        title
                        uri
                    }
                }
            }
        }
        `}
        render={data => {
            const chinesePosts = data.allWpChinesePost.edges.map(v=>v.node)
          
            const workoutPosts = data.allWpWorkoutPost.edges.map(v=>v.node)
            console.log(workoutPosts)
               return(
               
               <div className={"max-w-screen-xl mx-auto px-5"}>
                <h3> Chinese</h3>
                {chinesePosts.map(v=> <Link to={v.uri}>
                    <div className={"p-5"}>
                        <h4>
                            {v.title}
                            </h4>
                            </div></Link>)}
                <h3> Workout</h3>
                {workoutPosts.map(v=> <Link to={v.uri}>
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