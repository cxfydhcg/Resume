import React from "react"
import "./Interests.css"
function Interests(){
    return (
        <nav className="interests">
            <h3 className="experience">Experiences</h3>
            <ColoredLine />
            <h4 className="jobTitle">Math Tutor - Tutor.com</h4>
            <h5 className="jobDate">May 2021 - Aug 2021 -- 4 mos</h5>
            <p>Offering feedback on progress to students, working with students to help them understand key concepts. Teach skills to improve academic performance, including study strategies, note-taking skills, and approaches to answering test questions.
                Communicate with students through online platforms.</p>
            <ColoredLine />
            <h4 className="jobTitle">Math Tutor - Lenoir Community College</h4>
            <h5 className="jobDate">Oct 2020 - May 2021 -- 8 mos</h5>
            <p>Developing and distributing teaching materials to supplement classroom lessons, including study guides
                Conducting practice tests to track progress, identify areas of improvement, and help set goals for exam
                preparation. Providing students positive and constructive feedback</p>
            <ColoredLine />
            <h4 className="jobTitle">Cashier - Quick N Chicken</h4>
            <h5 className="jobDate">Oct 2020 - May 2021 -- 8 mos</h5>
            <p>Issue receipts, refunds, credits, or changes due to customers.
                Assist customers by providing information and resolving their complaints.
                Establish or identify prices of goods, services, or admission, and tabulate bills using calculators, cash
                registers, or optical price scanners.</p>
        </nav>
    )
}
const ColoredLine = ({ color = "black" }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            // height: 1,
            width: "91%",
            // marginRight: 0,
            // height: 
        }}
    />
);
export default Interests