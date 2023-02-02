import React from "react"
import "./Skill.css"
function Skill(){
    return (
        <div>
            <nav className="skills">
                <h3 className="skill">Skill:</h3>
                <h3 className="cetificate">Certificate/Activity:</h3>
            </nav>
            <nav className="para">
                <p className="p1">React<hr></hr>
                                  Java<hr></hr>
                                    C<hr></hr>
                                    Python<hr></hr>
                                    Julia<hr></hr>
                                    SolidWord<hr></hr>
                                    Chinese<hr></hr>
                                    </p>
                <p className="p2">Phi Theta Kappa<hr></hr>
                                App Development Club<hr></hr>   
                                </p>
            </nav>
        </div>
    )
}

export default Skill