import React from "react"
import selfy from "../assets/selfy.jpg"
import Button from './Button'
import Line from "./Line"
import "./Info.css"
function Info(){
    return (
        <nav className="info">
            <img src = {selfy} className="selfy" width={200} height={250} />
            <Line className = "Line" />
            <h2>Xufeng Ce</h2>
            <h4>Student at NCSU</h4>
            <Button />
            <Line className = "Line" />
            <h2>Education</h2>
            <h3>North Carolina State University</h3>
            <p>Computer Science<br></br>
               05/17/2022 - Current<br></br>
               GPA: 3.636</p>
            <h3>Lenoir Community College <font ></font></h3>
            <p>Associate in Science<br></br>
               05/17/2019 - 05/17/2021<br></br>
               GPA: 3.864</p>
            
        </nav>
    )
}

export default Info