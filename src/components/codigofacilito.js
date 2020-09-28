import React from "react"

export default () => {

  var req = require.context("../img/iconos", false, /.*\.svg$/);
  return (   
            <div className="max-w-4xl mx-auto mt-10">
              <header className="text-center">
                  <h2 className="text-3xl font-bold">Tecnologias Utilizadas</h2>
                  {
                    req.keys().forEach(function(key){

                      return( 
                        <div >
                          <img src={req(key)}></img>
                        </div>
                      )
                    })
                   
                          
                  }
              </header>
          </div>
  );
}