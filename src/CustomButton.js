import React from "react";

const CustomButton = (props) => {
        return(
            <button className="pure-material-button" onClick={props.action}>{props.text}</button>
        )
}

export default CustomButton