import React from "react"
import downloadFile from '../data/archivos/CV_DavidPincheira.pdf' 
let req = require.context("../img/iconos", false, /.*\.svg$/);

export default () => {
  return (   
        <div className="mx-auto p-16">
          <header className="text-center">
              <h2 className="text-3xl font-bold mb-8">Tecnologías utilizadas</h2>
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
          
          <div className="mx-auto p-10">
            <header className="text-center">
                <a className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={downloadFile} download>
                  <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Descargar CV</span>
                </a>
            </header>
          </div>
        </div>
  );
}