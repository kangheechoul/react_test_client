import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Button } from "@mui/material";
import defaultProfile from "../assets/images/dog.jpg";
import  HeaderService  from '../service/header';
import Logo from "../assets/images/dog.jpg";
import "../assets/css/header.css";

export const SideMenu = () =>{

 
  let member = {
    loginFlag : true,
    info : {
        name : "강희철",
        profile : Logo,
        visit : "15",
        level : "1",
        point : "300",
        friend : "0"
    }
  };
  let loginFlag = member.loginFlag;
  let memberInfo = member.info;


  let head = new HeaderService();
    
    useEffect(()=>{
        head.get_menu_list().then((result)=>{
            setMenu(result);
        });
    },[]);

  const [menu, setMenu] = useState([]);

  let menuContent = [];

  menu.map((a,b)=>{

    let listContent = [];
    a.list.map((aa)=>{
      listContent.push(<Grid item xs={12} key={aa.idx} sx={{mb:"5px" }}>{aa.name}</Grid>)
    })

    let content = 
    <Grid item sm={12} key={b}>
      <Box sx={{padding:"3px"}}>
        <Grid item sx={{fontWeight:"bold", mb:"5px", borderBottom:"2px solid gray"}} sm={12} >
          {a.title}
        </Grid>
        <Grid container sx={{textAlign:"left", width:"90%",ml:"10%",mb:"5px"}}>
          {listContent}
        </Grid>
      </Box>
    </Grid>;

    menuContent.push(content);
  });

  return (
      <>
        <Grid container>
          {/* 내 정보 박스 */}
          <Box sx={{mx:"5%", my:"3%", width:"90%" , minHeight:"20vh", padding:"5%", border:"1px solid gray", borderRadius:"10px"}}>
            {/* 로그인 */}
            <Grid container display={loginFlag?{sm:"inherit"}:{sm:"none"}} >
              <Grid container sx={{maxHeight:"10vh",minHeight:"10vh", borderBottom:"2px solid gray"}}>
                <Grid item sm={6} xs={0} sx={{textAlign:"center"}}>
                  <img src={member.info.profile} style={{width:"65%", px:"2%", maxHeight:"10vh",borderRadius:"15%"}}></img>
                </Grid>
                <Grid item sm={6} xs={0} sx={{margin:"auto 0", fontWeight:"bold", textAlign:"center"}}>
                  내이름
                </Grid>
                
              </Grid>
              
              <Grid container sx={{fontSize:"13px", color:"gray", textAlign:"left"}}>
                  <Grid item sm={6}>레벨</Grid>
                  <Grid item sm={6} sx={{textAlign:"right"}}>{memberInfo.level}</Grid>
                  
                  <Grid item sm={6}>방문</Grid>
                  <Grid item sm={6} sx={{textAlign:"right"}}>{memberInfo.visit}</Grid>

                  <Grid item sm={6}>캐시</Grid>
                  <Grid item sm={6} sx={{textAlign:"right"}}>{memberInfo.point}</Grid>

                  <Grid item sm={6}>친구</Grid>
                  <Grid item sm={6} sx={{textAlign:"right"}}>{memberInfo.friend}</Grid>
              </Grid>
            </Grid>

            {/* 미 로그인 */}
            <Grid container display={!loginFlag?{sm:"inherit"}:{sm:"none"}}>

              <Grid container>
                <Grid item sm={12} >
                  <Box sx={{textAlign:"center", padding:"2%", minHeight:"10vh"}}>
                    로그인 후 이용주세요
                  </Box>
                </Grid>
                <Grid item sm={6} >
                  <Card sx={{border:"1px solid gray",fontWeight:"bold", textAlign:"center", padding:"2%"}}>
                    <Link to={"/"} style={{textDecoration:"none"}}><Button>로그인</Button></Link>
                  </Card>
                </Grid>
                <Grid item sm={6} >
                  <Card sx={{border:"1px solid gray",fontWeight:"bold", textAlign:"center", padding:"2%"}}>
                    <Link to={"/"} style={{textDecoration:"none"}}><Button>회원가입</Button></Link>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

           

          </Box>
           {/* 메뉴 리스트 */}
          <Box sx={{mx:"5%", my:"3%", width:"90%" , minHeight:"20vh", padding:"5%", border:"1px solid gray", borderRadius:"10px"}}>
            {menuContent}
          </Box>
  
        </Grid>
      </>
  );
}