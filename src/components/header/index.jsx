import React from "react";
import "./index.css"
import Logo from "../../utils/logo.png"

const Header = () => {
    return(
        <div className="header">
            <img src= { Logo }/>
            <h1> Estoque </h1>
            <div className="space"></div>
        </div>
    )
}

export default Header