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
    
    let mul = 360 / bannerImages.length;
    
    useEffect(() => {
        setIdx(1);
        list.current.children[idx].style.left = "0";
    },[]);

    const next = () => {
        let children = list.current.children;
        if(idx == (bannerImages.length-1)){
            setIdx(()=>0);
        }else if(idx >= 0){
            setIdx(idx=>parseInt(idx+1));
        }
        console.log("next", idx);

        for(let key in children){
            if(typeof(children[key]) == "object"){
                let nextKey = (idx == 0 ? bannerImages.length-1 : idx-1);
                if(key == idx){
                    children[nextKey].style.left = "-100%";
                    children[idx].style.left = "0%";
                }else {
                    children[key].style.left = "100%";
                }
            }
        }
    }

    const prev = () => {
        let children = list.current.children;
        let temp = 0;


        if(idx == 0){
            setIdx(idx=>parseInt(bannerImages.length-1));
        }else if(idx > 0){
            setIdx(idx=>idx-1);
        }else{
            console.log("else");
        }
        console.log("prev", idx);

        for(let key in children){
            if(typeof(children[key]) == "object"){
                let prevKey = (idx == 0 ? bannerImages.length-1 : idx-1);
                if(key == idx){
                    children[prevKey].style.left = "-100%";
                    children[idx].style.left = "0%";
                }else {
                    children[key].style.left = "100%";
                }
            }
        }
    }


    let bannerList = [];

    bannerImages.map((a,b)=>{
        bannerList.push(<Box key={b} sx={{width:"100%", left : "100%", height:"100%" , transition:"all .5s", position:"absolute"}}> <img src={`${a}`} key={b} style={{width:"100%", height:"100%"}}></img></Box>);
    })

    return (
        <>
            <Grid item sm={2}>
                <Button onClick={()=>{prev()}}>이전</Button>
            </Grid>
            <Grid item sm={8} ref={list} sx={{ left:"0",position:"relative",overflow:"hidden",width:"100%", transition:"all .3s" ,minHeight:"30vh",maxHeight: "60vh", mt: "5%"}}>
                {bannerList}
            </Grid>
            <Grid item sm={2}>
                <Button onClick={()=>{next()}}>다음</Button>
            </Grid>
        </>
    );
}