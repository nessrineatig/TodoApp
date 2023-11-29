import React from "react";
const Popup=({handleView})=>{

    return (
        <div classname="pop">
         <h2 className="pop-content">Thank u for being their voice, we'll contact you ASAP</h2>
         <button id="back" onClick={()=>handleView('home')}>back to home</button>
         </div>
    )
}
export default Popup 