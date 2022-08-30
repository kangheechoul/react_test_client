import React , { useState } from "react";

// {type = "text", id, name, className, value="", placeholder}
export const InputText = (props) =>{
    const {...name} = props;
    const [val, setValue] = useState(name.value);

    const valueChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
        <h3>{val}</h3>
        <input 
        type = {name.type === undefined ? "type" : name.type}
        id = {name.id} 
        name = {name.name} 
        className = {name.className} 
        defaultValue = {val}
        onChange = {valueChange}
        placeholder = {name.placeholder}
        required ={name.required}/>
        </>
    );
}