import React, { useState } from "react";

const ToDoLi = (props) =>{

    const [line, setLine] =useState(false);
    const checkComplet = (id) => {
        setLine(true);
    };

    let prodID = props.id;
    return(
        <>
            <li id={prodID} style={{backgroundColor: line ? "#70bd70" : "none"}}>
                 <input type="checkbox" className="checked form-check-input" onClick={checkComplet}/>
                 {/* <input type="checkbox" className="checked form-check-input" onClick={() =>{props.checkComplet(props.id)}}/> */}
                 <label className="form-check-label">{props.text}</label>
                 <button className="btn close" onClick={() =>{props.onSelect(props.id)}}> X </button>
            </li>
                  
        </>
    );
  
};

export default ToDoLi;