import React from "react";

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-16 max-w-6xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-blue-800 text-4xl text-center lg:text-justify">Sobre mí</h1>
          <p className="text-blue-900 text-2xl font-medium tracking-wider lg:text-justify text-center max-w-4xl mt-10  ">
            Soy Licenciado en Sistemas de la Información y fullstack web developer <span className="text-black text-opacity-50 ">Actualmente viviendo en Buenos Aires, Argentina. 
            He trabajado con PHP y Javascript pero actualmente estoy aprendiendo NodeJS y React.JS!
            </span>
          </p>
        </div>
      </div>
    </div>
  </header>
)
