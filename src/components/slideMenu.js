import React, { useEffect, useState }from "react";
import { Grid, Box } from "@mui/material";
import defaultProfile from "../assets/images/dog.jpg";
import "../assets/css/header.css";

export const SlideMenu = ({open,setOpen,menu, member}) =>{

  let loginFlag = member.loginFlag;

  console.log(menu);
  return (
      <>
        <Box className={"slideMenuBack"+ (open?" open" : "")}></Box>
        <Box className={open ? "slideMenu open":"slideMenu"}>
          <Grid item xs={12} sx={{textAlign:"right", padding:"5px"}}> 
            <span onClick={()=>{console.log("닫기");setOpen(false);}}>닫기</span>
          </Grid>
          <Box sx={{padding:"5%", minHeight:"100px", backgroundColor:"red", mt:"15%"}}>
            {/* 내 정보 */}
            <Grid container spacing={1} className={"slideProfile"} sx={{textAlign:"center", padding:"5% 2%"}}>
              <Grid item xs={6} sx={{padding:"0",margin:"auto"}}>
                <img src={loginFlag ? "" : defaultProfile} style={{width:"60px", height:"60px", borderRadius:"50%", border:"none"}}></img>
              </Grid>
              <Grid item xs={6} sx={{padding:"0",margin:"auto"}}>
                <span>{loginFlag ? member.name : "unknown"}</span>
              </Grid>

              <Grid container sx={{mt:"10px"}}>
                <Grid item xs={loginFlag?3:12}>
                  로그인 후 이용해주세요
                </Grid>
              </Grid>
              
            </Grid>

            {/* 메뉴모음 */}
            <Grid container>

            </Grid>
          </Box>
          
        </Box>
      </>
  );
}