import React from "react";
import illustration from "../img/undraw_hacker_mindset_gjwq.svg"

export default () => (
  <header className="bg-gray-100">
    <div className="container mx-auto p-16 max-w-6xl">
      <div className="md:flex md:justify-center items-center flex-none sm:flex-1 md:flex-auto ">
        <div className="flex-1 md:text-left text-center">
          <h1 className="font-bold text-blue-900 text-5xl">Hola! </h1>
          <p className="text-blue-800 text-xl text-opacity-75">Soy David Pincheira,<br/> Licenciado en Sistemas de la Información</p>
        </div>
        <img src={illustration} alt="Hombre mostrando info" style={{height:"300px"}}></img>
      </div>
    </div>
  </header>
)
