import React from "react"


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            // height: 1,
            width: "80%",
            marginRight: 0,
            // height: 
        }}
    />
);

function Line( ){
    return ColoredLine({ color: "white" })
}

export default Line
