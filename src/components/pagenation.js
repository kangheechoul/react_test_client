import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Button } from "@mui/material";
import "../assets/css/common.css";
import Logo from "../assets/images/dog.jpg";


export const Pagenation = ({page, setPage, max}) =>{

    const page_click = (num) => {
        setPage(num);
    }
    let limit = 10;

    let pageUl;
    let li = [];

    for(let i = 1; i <= max; i++){
        if(Math.floor(page/limit) < (i/limit) && (i/limit) <= Math.ceil(page/limit)){
            li.push(<li style={i==page ? {color:"green", float:"left"}: {color:"black", float:"left"}}  key={i} onClick={()=>{page_click(i)}}>{i}</li>)
        }
    }
    pageUl = 
    <ul style={{listStyle:"none"}}>
        <li>{"<"}</li>
    {li}
        <li>{">"}</li>
    </ul>;

    useEffect(()=>{
       
    },[]);

  return (
      <>
        <Box >
            {pageUl}
        </Box>       
      </>
  );
}