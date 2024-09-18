import React from "react";

function RandomButton({ handleClick }) {
   return (
    <div className="rand-button">
        <button className="btn" onClick={handleClick}><b>Battle</b></button>
    </div>
   )
}

export default RandomButton;