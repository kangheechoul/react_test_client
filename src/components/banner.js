import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Grid, Box, Button } from "@mui/material";
import '../assets/css/common.css';
import Lib from "../service/lib";
import { clear } from '@testing-library/user-event/dist/clear';
let lib = new Lib();

const bannerImages = lib.importAll(require.context("../assets/images/banner"));
bannerImages.map((a) => {
    
})
export const Banner = () => {

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
            }, 2500);
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
        // 마지막 요소는 0 보다 작으면 처음으로 
        if(parseInt(children[bannerImages.length-1].style.left.replace("%", "")) <= 0){
            console.log("asd");
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (key*100).toString()+"%";
                    if(children[key].style.left == "100%"){
                        page = key;
                    }
                }
            }
        }else{
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (parseInt((children[key].style.left).toString().replace("%", "")) - 100).toString()+"%";
                    if(children[key].style.left == "100%"){
                        page = key;
                    }
                }
            }
        }
        bannerPagenaition(page);
    }

    const prev = () => {
        let children = list.current.children;
        let page = 0;

        if(parseInt(children[0].style.left.replace("%", "")) >= 0){
            let temp = bannerImages.length - 1;

            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (temp*100*-1).toString()+"%";
                    temp--;
                    if(children[key].style.left == "100%"){
                        page = key;
                    }
                }
            }
        }else{
            for(let key in children){
                if(typeof(children[key]) == "object"){
                    children[key].style.left = (parseInt((children[key].style.left).toString().replace("%", "")) + 100).toString()+"%";
                    if(children[key].style.left == "100%"){
                        page = key;
                    }
                }
            }
        }
        bannerPagenaition(page);
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
                    pageIconList[key].style.backgroundColor="black";
                }else{
                    pageIconList[key].style.backgroundColor="white";
                }
            }
        }

        pageNum = num;
    }
        

    let bannerList = [];
    let bannerPageList = [];

    bannerImages.map((a,b)=>{
        let left = (b*100).toString()+"%";
        bannerList.push(<Box key={b} sx={{width:"100%", height:"100%" , transition:"all .5s", position:"absolute", zIndex:"0"}}> <img src={`${a}`} key={b} style={{width:"100%", height:"100%"}}></img></Box>);
        bannerPageList.push(<li key={b} style={{width:"10px",height:"10px", padding:"8px", backgroundColor:"white",display:"inline-block",px:"10px", border:"1px solid black", borderRadius:"50%",width:"10px", height:"10px", marginLeft:"5px" }} onClick={()=>{bannerPagenaition(b)}}></li>);
    })

    return (
        <>
            <Grid item sm={2} xs={2}>
                {/* <Button onClick={()=>{prev()}}>이전</Button> */}
            </Grid>
            <Grid item sm={8} xs={8} sx={{position:"relative"}}>
                <Box ref={list} sx={{width:"auto", overflow:"hidden", position:"relative", overFlow:"hidden",width:"100%", transition:"all .3s" ,minHeight:"30vh",maxHeight: "60vh", mt: "5%"}}>
                    
                {bannerList}
                    
                </Box>
                
                <Box sx={{width:"100%", position:"absolute", bottom:"0", textAlign:"center",marginTop:"10px", marginBottom:"5px"}} >
                    <ul ref={page} style={{width:"100%", textAlign:"center", margin:"auto 0"}}>
                        {bannerPageList}
                    </ul>
                </Box>
            </Grid>
            <Grid item sm={2} xs={2}>
                {/* <Button onClick={()=>{next()}}>다음</Button> */}
            </Grid>
        </>
    );
}