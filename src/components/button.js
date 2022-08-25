import React from "react";

export const Button = ({type="button", clickEvent, value}) => {

    return (
        <>
        <button type = {type} onClick={clickEvent}>{value}</button>
        </>
    );
}