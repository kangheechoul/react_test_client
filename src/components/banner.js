import React, { useEffect, useState, useRef } from 'react';

import { Grid, Box, Button } from "@mui/material";
import Lib from "../service/lib";
let lib = new Lib();

const bannerImages = lib.importAll(require.context("../assets/images/banner"));
bannerImages.map((a) => {
})
export const Banner = () => {

    let [num, setNum] = useState(0);

    const [idx, setIdx] = useState(0);
    const [children, setChildren] = useState("");
    let list = useRef(null);
    
    
    useEffect(() => {
        setIdx(1);
        list.current.children[idx].style.left = "0";
        
    }, []);

    const test = () => {
        let children = list.current.children;
        for(let key in children){
            if(typeof(children[key]) == "object"){
                if(idx == (bannerImages.length-1)){
                    setIdx(0);
                }else if(idx >= 0){
                    setIdx(idx+1);
                }
                let prevKey = key -1;
                
                if(key == idx){

                    if(key == 0){
                        prevKey = bannerImages.length-1;
                    }
                    children[prevKey].style.left = "-100%";
                    console.log(key, prevKey);
                    children[key].style.left = "0%";
                }else{
                    children[key].style.left = "100%";
                }
            }
        }

    }

    let bannerList = [];

    bannerImages.map((a,b)=>{
        let left = (b*100).toString()+"%";
        bannerList.push(<Box key={b} sx={{width:"100%", left : "100%", height:"100%",transition:"all .3s", position:"absolute"}}> <img src={`${a}`} key={b} style={{width:"100%", height:"100%"}}></img></Box>);
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