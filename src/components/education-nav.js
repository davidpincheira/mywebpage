import { useStaticQuery } from 'gatsby'
import React from 'react'

export default (props)=>{
    const data = useStaticQuery(graphql`
    {
        allEducationJson{
            edges{
                node{
                    slug
                    title
                    description
                }
            }
        }
    }`);

    return(
        <div className="max-w-4xl mx-auto mt-20 ">
            <h2 className="text-3xl font-bold text-center">Educación</h2>
            <nav className="flex justify-center mt-8 ">
                {
                    data.allEducationJson.edges.map((element, index)=>{
                        const { node } = element;
                        return(
                            <a href={`/${node.slug}`}  key={index} >
                                <article className="style-education relative flex-1 m-4 p-4 text-center" >
                                    <div className="font-bold leading-loose pb-4" >{node.title}</div>
                                    <p className="font-light pb-12">{node.description}</p>
                                </article>
                            </a>
                        )
                    })
                }
            </nav>
        </div>
    )
}