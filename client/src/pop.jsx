import React from "react";
const Popup=({handleView})=>{

    return (
        <>
         <h2 className="pop-content">Thank u for being their voice, we'll contact you ASAP</h2>
         <button onClick={()=>handleView('home')}>back to home</button>
         </>
    )
}
export default Popup 