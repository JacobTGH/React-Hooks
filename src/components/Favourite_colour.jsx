import React, { useState } from "react";

function FavouriteColor() {
    const [color, setColor]=useState("red");
    return (
    <>
        <h1>My favourite color is {color}</h1>
        <button type="button" onClick={()=>setColor("blue")}>Blue</button>
        <button type="button" onClick={()=>setColor("green")}>Green</button>
        <button type="button" onClick={()=>setColor("brown")}>Brown</button>
    </>
    );
}
export default FavouriteColor;
