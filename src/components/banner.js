import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Grid, Box, Button } from "@mui/material";

import Lib from "../service/lib";


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

let lib = new Lib();

const bannerImages = lib.importAll(require.context("../assets/images/banner"));

export const Banner = ({width}) => {

    let list = useRef(null);
    let page = useRef(0);

    let pageNum = 0;

    
    useEffect(() => {
        const timer = setInterval(() => {
                pageNum++
                if((bannerImages.length-1) < pageNum){
                    pageNum = 0;                    
                }
                bannerPagenaition(pageNum);
            }, 3000);
    }, [pageNum])
 
    
    useEffect(() => {
        let children = list.current.children;
        for(let key in children){
            if(typeof(children[key]) == "object"){
                    children[key].style.left = (key*100).toString()+"%";
            }
        }
        pageNum = 0;
        bannerPagenaition(pageNum);
    },[]);

    const next = () => {
        
        let children = list.current.children;
        let page = 0;

        for(let key in children){
            if(typeof(children[key]) == "object"){
                if(children[key].style.left == "0%" || children[key].style.left == "0"){
                    page = parseInt(key)+1;
                }
            }
        }
        console.log(page);
        bannerPagenaition(bannerImages.length-1 < page ? 0 : page);
    }

    const prev = () => {
        let children = list.current.children;
        let page = 0;

        for(let key in children){
            if(typeof(children[key]) == "object"){
                if(children[key].style.left == "0%" || children[key].style.left == "0"){
                    page = parseInt(key)-1;
                }
            }
        }
        bannerPagenaition(page < 0 ? bannerImages.length-1 : page);
    }


    const bannerPagenaition = (num) => {

        let children = list.current.children;
        let temp = num * (-100);

        for(let key in children){
            if(typeof(children[key]) == "object"){
                children[key].style.left= temp.toString()+"%";
                temp += 100;
            }
        }

        let pageIconList = page.current.children;
        for(let key in pageIconList){
            if(typeof(pageIconList[key]) == "object"){
                if(key == num){
                    pageIconList[key].className = "active";
                }else{
                    pageIconList[key].className = "";
                }
            }
        }

        pageNum = num;
    }
        

    let bannerList = [];
    let bannerPageList = [];

    bannerImages.map((a,b)=>{
        let left = (b*100).toString()+"%";
        bannerList.push(<Box key={b} className={"item"}> <img src={`${a}`} key={b} ></img></Box>);
        bannerPageList.push(<li key={b} onClick={()=>{bannerPagenaition(b)}}></li>);
    })

    return (
        <>
          
            <Grid item sm={12} xs={12} sx={{width:width, height:"auto"}} className={"banner"}>

                <Box ref={list} className={"slider"}>
                    {bannerList}
                </Box>
                
                <Box className={"options"}>
                    <Box>
                        <Button className={"lbtn"} onClick={()=>{prev()}}><ArrowBackIosNewIcon/></Button>
                        <Button className={"rbtn"} onClick={()=>{next()}}><ArrowForwardIosIcon/></Button>
                    </Box>
                    <ul ref={page}>
                        {bannerPageList}
                    </ul>
                    
                </Box>
            </Grid>
          
        </>
    );
}