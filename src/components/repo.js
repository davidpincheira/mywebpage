import React from "react"

export default (props) => (
    <li className="flex items-center">
        <div className="w-8/12 overflow-x-hidden">
            <h4 className="text-green-500 capitalize font-bold">{props.repo.name}</h4>
            <p className="text-sm text-gray-700 overflow-y-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right"></div>
        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="shadow-md p-2"> Ver</a>
    </li>
)