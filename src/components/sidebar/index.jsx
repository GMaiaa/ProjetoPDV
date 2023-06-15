import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaPaw } from "react-icons/fa"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { MdOutlineAttachMoney, MdSpaceDashboard } from "react-icons/md"
import "./index.css"

const SideBar = ({page}) => {

 return(
    <div className="sideBar">
        <FaPaw className="icon"/>
        <div className="navButtons">
        <Link to="/">
        <button> <BsFillBoxSeamFill className="icon" style={page === 0 ? {color: "#7d6d46"}:{}} /> </button></Link>
        <Link to="/shop">
        <button> <MdOutlineAttachMoney className="icon" style={page === 1 ? {color: "#7d6d46"}:{}} /> </button></Link>
        <button > <MdSpaceDashboard className="icon" style={page === 2 ? {color: "#7d6d46"}:{}} /> </button>
        </div>
    </div>
 )
}

export default SideBar