import React from "react";
import emoji from "../emoji";


function Emoji()
{
    return(
 
        <div className="emoji-item">
           <span className="emoji-name">{emoji[0].name}</span>
           <span className="emoji-face">{emoji[0].face}</span>
           <p className="emoji-describe">{emoji[0].describe}</p>
        </div>
    
    );
}
