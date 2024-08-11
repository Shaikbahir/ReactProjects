import React from "react";
import emoji from "./component/emoji";

function Emoji() {
    const emojiList = "";
    return (
        <div className="emoji-list">
            {
                emoji.map((item) => (

                    <div className="emoji-item" key={item.id}>
                        <h1 className="emoji-face">{item.face}</h1>
                        <h2 className="emoji-name">{item.name}</h2>
                        <p className="emoji-describe">{item.describe}</p>
                    </div>

                )
                )
            }
        </div>
    );
}

console.log(emoji.map((item)=> item.name.toUpperCase()))

export default Emoji;