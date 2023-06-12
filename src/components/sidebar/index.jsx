import React from "react";
import { FaPaw } from "react-icons/fa"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { MdOutlineAttachMoney, MdSpaceDashboard } from "react-icons/md"
import "./index.css"

const SideBar = ({page}) => {

 return(
    <div className="sideBar">
        <FaPaw className="icon"/>
        <div className="navButtons">
        <button style={page === 0 ? {background: "var(--gold)"}:{}}> <BsFillBoxSeamFill className="icon" style={page === 0 ? {color: "var(--bg-light)"}:{}} /> </button>
        <button style={page === 1 ? {background: "var(--gold)"}:{}}> <MdOutlineAttachMoney className="icon" style={page === 1 ? {color: "var(--bg-light)"}:{}} /> </button>
        <button style={page === 2 ? {background: "var(--gold)"}:{}}> <MdSpaceDashboard className="icon" style={page === 2 ? {color: "var(--bg-light)"}:{}} /> </button>
        </div>
    </div>
 )
}

export default SideBar