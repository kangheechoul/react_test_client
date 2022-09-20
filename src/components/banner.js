import React, { useEffect, useState, useRef } from 'react';

import { Grid, Box, Button } from "@mui/material";
import Lib from "../service/lib";
let lib = new Lib();

const bannerImages = lib.importAll(require.context("../assets/images/banner"));
bannerImages.map((a) => {
    
})
export const Banner = () => {


    let list = useRef(null);
    let num = useRef(0);
    
    useEffect(() => {
        let children = list.current.children;
        for(let key in children){
            if(typeof(children[key]) == "object"){
                children[key].style.left = (key*100).toString()+"%";
            }
        }
    },[]);

    const next = () => {
        
        let children = list.current.children;
        // 마지막 요소는 0 보다 작으면 처음으로 
        if(parseInt(children[bannerImages.length-1].style.left.replace("%", "")) <= 0){
            console.log("asd");
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (key*100).toString()+"%";
                }
            }
        }else{
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (parseInt((children[key].style.left).toString().replace("%", "")) - 100).toString()+"%";
                }
            }
        }

        let currnet_idx = (parseInt((children[0].style.left).toString().replace("%","")) / -100).toString().replace("-","");
        console.log(currnet_idx, (currnet_idx == 0));

    }

    const prev = () => {
        let children = list.current.children;

        if(parseInt(children[0].style.left.replace("%", "")) >= 0){
            let temp = bannerImages.length - 1;

            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (temp*100*-1).toString()+"%";
                    temp--;
                }
            }
        }else{
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (parseInt((children[key].style.left).toString().replace("%", "")) + 100).toString()+"%";
                }
            }
        }
    }
    const bannerPagenation = (num) => {
        let children = list.current.children;
        let temp = num * (-100);

        for(let key in children){
            if(typeof(children[key]) == "object"){
                children[key].style.left= temp.toString()+"%";
                temp += 100;
            }
        }
    }
        

    let bannerList = [];
    let bannerPageList = [];

    bannerImages.map((a,b)=>{
        let left = (b*100).toString()+"%";
        bannerList.push(<Box key={b} sx={{width:"100%", height:"100%" , transition:"all .5s", position:"absolute", zIndex:"0"}}> <img src={`${a}`} key={b} style={{width:"100%", height:"100%"}}></img></Box>);
        bannerPageList.push(<Box key={b} sx={{fontWeight:"bold", display:"inline-block",px:"10px", border:"1px solid black" }}  onClick={()=>{bannerPagenation(b)}}><span>{b}</span></Box>);
    })

    return (
        <>
            <input type={"hidden"} ref={num} value={0}></input>
            <Grid item sm={2} xs={2}>
                <Button onClick={()=>{prev()}}>이전</Button>
            </Grid>
            {/* <Grid item sm={8} ref={list} sx={{ left:"0",position:"relative",overflow:"hidden",width:"100%", transition:"all .3s" ,minHeight:"30vh",maxHeight: "60vh", mt: "5%"}}> */}
            <Grid item sm={8} xs={8} >
                <Box ref={list} sx={{width:"auto", overflow:"hidden", position:"relative", overFlow:"hidden",width:"100%", transition:"all .3s" ,minHeight:"30vh",maxHeight: "60vh", mt: "5%"}}>
                {bannerList}
                </Box>
                <Box sx={{textAlign:"center"}} >
                    {bannerPageList}
                </Box>
            </Grid>
            <Grid item sm={2} xs={2}>
                <Button onClick={()=>{next()}}>다음</Button>
            </Grid>
        </>
    );
}