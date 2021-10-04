import React from "react";
import './Input.css'

function Input(props) {
  
 const {variant,...rest} = props; 
  return <input className={variant} {...rest}/>;
}

export default Input;
