import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const CustomButton = ({type="button", clickEvent, value, variant}) => {

    const [disabled, setDisabled] = useState(false);

    // 중복 클릭 방지
    const click = () =>{
        setDisabled(true);
        clickEvent();
        setDisabled(false);
    }

    return (
        <>
        <Button type = {type} onClick={click} disabled={disabled} variant={variant} active>{value}</Button>
        </>
    );
}