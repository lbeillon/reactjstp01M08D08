import React from "react";
import { useState } from "react";

const DisablableButton = (props) => {

    const [etat, setEtat] = useState(false);

    const handleClick = (e) => setEtat(!e.target.etat);

    return(
            
        <button className="pure-material-button" onClick={handleClick} disabled={etat}>{props.text}</button>
    )

}

export default DisablableButton