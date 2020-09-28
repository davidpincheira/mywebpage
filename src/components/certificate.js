import React from "react"

export default (props) => {
    const certificate = props.element;
    return (
        <div className="shadow-xl p-8 bg-white mr-4 mb-12 rounded">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block font-bold text-green-500 p-d mt-2 radius">
                    Calificacion: {certificate.score}
                </span>
            </div>
        </div>
    )
}