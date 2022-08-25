import React , { useState } from "react";

// {type = "text", id, name, className, value="", placeholder}
export const InputText = (props) =>{
    const [val, setValue] = useState(props.value);

    const valueChange = (event) => {
        setValue(event.target.value);
        // console.log(event.target.value);
    }


    return (
        <>
        <h3>{val}</h3>
        <input 
        type = {props.type === undefined ? "type" : props.type}
        id = {props.id} 
        name = {props.name} 
        className = {props.className} 
        defaultValue = {val}
        onChange = {valueChange}
        placeholder = {props.placeholder}/>
        </>
    );
}

