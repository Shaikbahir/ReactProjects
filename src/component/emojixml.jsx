import React from "react";
import emoji from "../emoji"; // Ensure the correct path


function Emoji() {
    return (
        emoji.map((eachEmoji) => (
            <div className="emoji-item">
                <span className="emoji-name">{eachEmoji.name}</span>
                <span className="emoji-face">{eachEmoji.face}</span>
                <p className="emoji-describe">{eachEmoji.describe}</p>
            </div>
        ))
        /*  */
    );
}

export default Emoji;
