import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card } from "@mui/material";
import defaultProfile from "../assets/images/dog.jpg";
import Logo from "../assets/images/dog.jpg";
import "../assets/css/header.css";

export const SlideMenu = ({open,setOpen,menu, user ,loginFlag}) =>{

  let memberInfo = user;

  let menuContent = [];

  menu.map((a,b)=>{

    let listContent = [];
    a.list.map((aa)=>{
      listContent.push(<Grid item xs={12} key={aa.idx} sx={{mb:"5px"}}>{aa.name}</Grid>)
    })

    let content = <Grid item xs={6} key={b}>
      <Card sx={{padding:"3px"}}>
        <Grid item sx={{fontWeight:"bold", mb:"5px"}} xs={12} >
          {a.title}
        </Grid>
        <Grid container sx={{textAlign:"center",mb:"5px"}}>
          {listContent}
        </Grid>
      </Card>
    </Grid>;

    menuContent.push(content);
  });

  return (
      <>
        <Box className={"slide_menu_back"+ (open?" open" : "")} onClick={()=>{setOpen(false)}}></Box>
        <Box className={open ? "slide_menu open":"slide_menu"}>

          <Grid container sx={{borderBottom:"1px solid gray", pb:"10px"}}>
            <Grid item xs={4}>
              {/* 빈공간 */}
            </Grid>
            <Grid item xs={4}  sx={{textAlign:"center", mt:"10px"}}>
              <img src={Logo} style={{width:"50px"}}></img>
            </Grid>
            <Grid item xs={4} sx={{textAlign:"right", padding:"5px"}}> 
              <span onClick={()=>{console.log("닫기");setOpen(false);}}>닫기</span>
            </Grid>
          </Grid>
          
          {/* 내 정보 */}
          <Box className={"slide_profile"} sx={{padding:"5%", backgroundColor:"#cccccc"}}>
          <Box className={"sub_title"}>내 정보</Box>
            <Card>
              <Grid container spacing={1}  sx={{padding:"5% 2%"}}>
                <Grid item xs={6} className={"profile_img"}>
                  <img src={loginFlag ? memberInfo.profile : defaultProfile}></img>
                </Grid>
                <Grid item xs={6} className={"profile_name"}>
                  <span>{loginFlag ? memberInfo.name : "unknown"}</span>
                </Grid>
                <Grid container sx={{mt:"10px"}}>
                  {/* 미 로그인 */}
                  <Grid container display={loginFlag?{xs:"none"}:{xs:"inherit"}}>
                    <Grid item xs={12}>
                      로그인 후 이용해주세요
                    </Grid>
                  </Grid>
                  
                  {/* 로그인 */}
                  <Grid container display={loginFlag?{xs:"inherit"}:{xs:"none"}} sx={{pl:"15px"}}>
                    <Grid item xs={6}>
                      <span>레벨 : {memberInfo.level_idx}</span>
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
            </Card>
            
          </Box>
           {/* 메인메뉴 모음 */}
          <Box className={"menu_content"}>
            <Box className={"sub_title"}>메뉴</Box>
            <Grid container spacing={1}>
              {menuContent}
            </Grid>
          </Box>
          
          <Box className={"bottom_content"} >
            {/* 하단메뉴모음 */}
            <Grid container >
              <Grid item xs={4}>
                <Link to={""}>로그아웃</Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={""}>FAQ</Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={""}>고객센터</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
  );
}