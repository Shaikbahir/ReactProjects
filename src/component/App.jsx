import React, { useState } from "react";
import "../index.css"


function App() {
    var [changes, setChanges] = useState(" ");
    var [buttonEvent, makeButtonEvent] = useState("Submit");
    const [boolVal, setVal] = useState(false);
    function handleClick() {
        makeButtonEvent("submitted")
        setChanges(changes)
    }
    function mouseOver() {
        setVal(true)
    }
    function mouseOut() {
        setVal(false)
    }
    function handleChange(e) {
       changes=e.target.value
       console.log(changes)
    }


    return (
        <div className="container">

            <h1 className="heading"> Hello! {changes}</h1>
            <input onChange={handleChange} type="text" placeholder="Enter your name" className="input" />
            <button onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={handleClick}
                style={{ backgroundColor: boolVal && "black" }}
                className="button"> {buttonEvent}</button>
        </div>

    );

}
export default App; 