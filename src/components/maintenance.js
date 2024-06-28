import React from "react";
import downloadFile from '../data/archivos/CV_DavidPincheira.pdf' 


export default () => (
  
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-gray-400 mb-6">Sitio en Mantenimiento</h1>
    <a className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transform transition-transform hover:scale-105" href={downloadFile} download>
      <svg className="fill-current w-5 h-5 mr-2" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
      </svg>
      <span>Descargar CV</span>
    </a>
  </div>
</div>
  )

