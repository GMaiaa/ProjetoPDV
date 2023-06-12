import React from "react";
import { FaPaw } from "react-icons/fa"
import { BsFillBoxSeamFill } from "react-icons/bs"
import { MdOutlineAttachMoney, MdSpaceDashboard } from "react-icons/md"
import "./index.css"

const SideBar = () => {
 return(
    <div className="sideBar">
        <FaPaw className="icon"/>
        <div className="navButtons">
        <button> <BsFillBoxSeamFill className="icon" /> </button>
        <button> <MdOutlineAttachMoney className="icon" /> </button>
        <button> <MdSpaceDashboard className="icon" /> </button>
        </div>
    </div>
 )
}

export default SideBar