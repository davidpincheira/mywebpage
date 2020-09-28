import React from "react"
var req = require.context("../img/iconos", false, /.*\.svg$/);

export default () => {
  return (   
        <div className="container mx-auto p-16 max-w-6xl">
          <header className="text-center">
              <h2 className="text-3xl font-bold mb-8">Tecnologias utilizadas</h2>
          </header>
          <div className="flex flex-row shadow mb-8">
          {
            req.keys().map(function(key){
                return (
                  <div >
                    <img src={req(key)}></img>
                  </div>
                )
            })
          }
          </div>
              
        </div>
  );
}