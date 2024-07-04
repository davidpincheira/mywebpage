import React from "react";
import downloadFile from '../data/archivos/CV_DavidPincheira.pdf' 

export default () => (
  <header className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto p-16 max-w-6xl">
      <div className="md:flex md:justify-center items-center flex-none sm:flex-1 md:flex-auto ">
        <div className="flex-1 md:text-left text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Sitio en mantenimiento </h1>
        <div className="mx-auto p-10">
            <header className="text-left">
                <a className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={downloadFile} download>
                  <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Descargar CV</span>
                </a>
            </header>
          </div>
        </div>
      </div>
    </div>
  </header>
)