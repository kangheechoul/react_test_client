import React from "react";



export const Form = (props) => {

    const {...doms} = props;
    console.log(doms);

    const customhandle = (e) => {

    }

    return (
        <>
            <form onSubmit={customhandle}>

            </form>
        </>
    );
}