import React, { useEffect, useState, useRef } from 'react';

import { Grid, Box, Button } from "@mui/material";
import Lib from "../service/lib";
let lib = new Lib();

const bannerImages = lib.importAll(require.context("../assets/images/banner"));
bannerImages.map((a) => {
})
export const Banner = () => {

    let [num, setNum] = useState(0);

    let count = 0;

    let list = useRef(0);
    useEffect(() => {
    }, []);

    const test = () => {
        console.log(list.current.style);
        list.current.style.left = (list.current.style.left-100).toString()+"%";
    }

    let bannerList = [];

    bannerImages.map((a,b)=>{
        let left = (b*100).toString()+"%";
        bannerList.push(<Box key={b} sx={{width:"100%", height:"100%", left:left, position:"absolute"}}> <img src={`${a}`} key={b} style={{width:"100%", height:"100%"}}></img></Box>);
    })

    return (
        <>
            <Grid item sm={2}>
                <Button onClick={()=>{test()}}>테스트</Button>
            </Grid>
            <Grid item sm={8} ref={list} sx={{ left:"0",position:"relative",overflow:"hidden",width:"100%", transition:"all .3s" ,minHeight:"20vh",maxHeight: "40vh", mt: "5%"}}>
                {bannerList}
            </Grid>
            <Grid item sm={2}>

            </Grid>
        </>
    );
}