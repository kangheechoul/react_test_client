import React, { useEffect, useState }from "react";
import { Grid, Box } from "@mui/material";
import defaultProfile from "../assets/images/dog.jpg";
import "../assets/css/header.css";

export const SlideMenu = ({open,setOpen,menu, member}) =>{

  let loginFlag = member.loginFlag;
  let memberInfo = member.info;

  let menuContent = [];

  menu.map((a,b)=>{

    let listContent = [];
    a.list.map((aa)=>{
      listContent.push(<Grid item xs={12} key={aa.idx}>{aa.name}</Grid>)
    })

    let content = <Grid item xs={6} key={b}>
      <Grid item sx={{fontWeight:"bold"}} xs={12} >
        {a.title}
      </Grid>
      <Grid conatiner sx={{textAlign:"center"}}>
        {listContent}
      </Grid>
    </Grid>;

    menuContent.push(content);
  });

  return (
      <>
        <Box className={"slideMenuBack"+ (open?" open" : "")}></Box>
        <Box className={open ? "slideMenu open":"slideMenu"}>
          <Grid item xs={12} sx={{textAlign:"right", padding:"5px"}}> 
            <span onClick={()=>{console.log("닫기");setOpen(false);}}>닫기</span>
          </Grid>
          <Box sx={{padding:"5%", minHeight:"100px", backgroundColor:"red", mt:"15%"}}>

            {/* 내 정보 */}
            <Grid container spacing={1} className={"slideProfile"} sx={{padding:"5% 2%"}}>
                <Grid item xs={6} sx={{padding:"0",margin:"auto", textAlign:"center"}}>
                  <img src={loginFlag ? memberInfo.profile : defaultProfile} style={{width:"60px", height:"60px", borderRadius:"50%", border:"none"}}></img>
                </Grid>
                <Grid item xs={6} sx={{padding:"0",margin:"auto", textAlign:"center"}}>
                  <span>{loginFlag ? memberInfo.name : "unknown"}</span>
                </Grid>


              <Grid container sx={{mt:"10px", width:"600px"}}>
                {/* 미 로그인 */}
                <Grid container display={loginFlag?{xs:"none"}:{xs:"inherit"}}>
                  <Grid item xs={12}>
                    로그인 후 이용해주세요
                  </Grid>
                </Grid>
                
                {/* 로그인 */}
                <Grid container display={loginFlag?{xs:"inherit"}:{xs:"none"}}>
                  <Grid item xs={6}>
                    <span>레벨 : {memberInfo.level}</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>방문 : {memberInfo.visit}</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>캐시 : {memberInfo.point}</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>친구 : {memberInfo.friend}</span>
                  </Grid>
                </Grid>

              </Grid>
              
            </Grid>
          </Box>
           {/* 메인메뉴 모음 */}
          <Box sx={{width:"100%", backgroundColor:"blue", minHeight:"100px", padding:"5%"}}>
            <Grid container >
              <Grid container spacing={3} >
                {menuContent}
              </Grid>
            </Grid>
          </Box>
          
          <Box>
            {/* 하단메뉴모음 */}
            <Grid container>
              모바일 배너
            </Grid>
          </Box>
        </Box>
      </>
  );
}