import React from "react";

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-16 max-w-6xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-blue-800 text-4xl">Sobre mí</h1>
          <p className="text-blue-900 text-2xl font-medium tracking-wider justify-center max-w-4xl mt-10">
            Soy Licenciado en Sistemas de la Información y fullstack web developer <span className="text-black text-opacity-50 ">Actualmente viviendo en Buenos Aires, Argentina. 
            He trabajado con PHP y Javascript pero actualmente me he metido con NodeJS y React.JS mayormente!
            </span>
            {/* I'm a Bachelor's Degree in Systems of Information and fullstack web developer <span className="text-black text-opacity-50 ">currently living in Buenos Aires, Argentina. 
                    I worked with PHP and Javascript but at the present I'm really enjoy work with NodeJS, React.JS and news technologies!
                    Too 
            </span> */}
            
          </p>
        </div>
      </div>
    </div>
  </header>
)
