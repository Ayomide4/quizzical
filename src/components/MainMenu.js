import React from "react";
import "../App.css"

export default function MainMenu({menuActive, setMenuActive}){
    return(
        <div className="menu-container">
            <div className="blob-1"></div>
            <div className="blob-2"></div>
            <h1>Quizzical</h1>
            <h3>Some description</h3>
            <button className="start-btn" onClick={()=>setMenuActive(prevMenu => !prevMenu)}>Start Quiz</button>
        </div>
    )
}