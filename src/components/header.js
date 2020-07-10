import React from "react";
import illustration from "../img/undraw_preferences_popup_wbfw.svg"
import Form from "../components/contact.form";

export default () => (
  <header className="bg-blue-500">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-blue-800 text-6xl">Hola, soy David </h1>
          <p className="text-xl font-light">soy programador fullstack</p>
        </div>
        <img src={illustration} alt="Hombre mostrando info" style={{height:"300px"}}></img>
      </div>
      <div>
        <Form />
      </div>
    </div>
    
  </header>
)
