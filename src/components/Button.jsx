import React from "react"
import "./Button.css"

import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Button(){
    return (
        <nav className="btn">
            <a href="mailto:xufengce209@gmail.com" class="btn first"><MdEmail className="mail-icon"/></a>
            <a href="https://www.linkedin.com/in/xufengce/" target="_blank" class="btn second"><BsLinkedin className="linkedIn-icon"/></a>
        </nav>
    )
}

export default Button