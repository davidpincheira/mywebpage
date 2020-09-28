import React from "react";
import { graphql, Link } from 'gatsby';
import EdNav from "../components/education-nav";

export default (props) => {
    const pageData = props.data.educationJson
    return(
        <div>
            <header className="py-12 border-blue-500 border-solid border-t-8">
                <div className="max-w-6xl mx-auto ">
                    <Link to="/" className="text-2xl text-blue-700">Regresar al Inicio</Link>
                    <h2 className="capitalize text-5xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item,index)=>(
                        
                        <li key={index} className="bg-white shadow mt-3 flex max-w-5xl mx-auto">
                            
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8 ">
                                <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                {
                                    item.inicio && <p> {item.inicio}- {item.fin}</p>
                                }
                                {
                                    item.degree && <span className="inline-block p-2 mt-2 radius bg-gray-300 text-blue-800 font-bold">{item.degree} </span>
                                }
                                {
                                    item.note && <div>
                                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                                                        Calification: {item.note}
                                                    </span>
                                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                                                        Platform: {item.platform}
                                                    </span>
                                                </div>
                                }
                                </div>
                                
                                <div className="inline-block ">
                                {
                                    item.url && <a href={item.url} className="btn2 btn2-blue mt-4 inline-block" target="_blank" rel="noopener noreferrer">Ver curso</a>
                                }
                                {
                                    item.date_start && <span className="inline-block p-2 text-2xl bg-gray-300 text-blue-800 font-bold rounded-lg">{item.date_start}- {item.date_end}</span>
                                }
                                {
                                    item.score && <span className="inline-block p-2 text-2xl bg-blue-100 text-blue-700">{item.score}</span>
                                }
                                </div>
                                
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EdNav />
        </div>
    )
}

export const query = graphql`
    query($slug : String){
        educationJson(slug: { eq: $slug}){
            title
            description
            slug
            items{
                name
                degree
                date_start
                date_end
                inicio
                fin
                title
                platform
                note
                url
            }
        }
    }
`;
