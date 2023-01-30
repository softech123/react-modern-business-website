import React from "react";
import styles from "./Button1.css"

const Buttonb = () =>{
    function handlebtnclick(e){
alert("your item has been added to cart")
    }
    return(
    <button className="button1" onClick={handlebtnclick}>Add to cart</button>
    )
}
export default Buttonb;