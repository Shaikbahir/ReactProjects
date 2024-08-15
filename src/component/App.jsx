// import React from "react";
// import Login from "./login";


// const userdataInfo = true

// function App() {

//     return (
//         <Login userdataInfoProps={userdataInfo} />
//     );

// }

// export default App;//(for login form conditional statements)


import React, { useState } from "react";

var newDate = new Date()
var now = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()


function App() {
    setInterval(getTime, 1000)
    var [time, setTime] = useState(now)
    function getTime() {
        var date = new Date()
        setTime(time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
        console.log(time)

    }
    return (
        <div>
            <button onClick={getTime}>Time</button>
            <h1>{time}</h1>

        </div>

    );
}




export default App;

