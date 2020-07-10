import React from "react"
import { useStaticQuery, graphql, grap } from "gatsby"
import Posts from "./posts";
import Certificate from "./certificate";

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
          data {
            certificates {
              code
              score
              title
            }
          }
        }
      }`);

    console.log(data)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                    data={data.codigofacilitoJson.data.certificates} 
                    card={Certificate}
                    title="Certificaciones" />
                </div>
                
            </div>
        </section>
    );
}