import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Button } from "@mui/material";
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
      listContent.push(<Grid item xs={12} key={aa.idx} sx={{mb:"5px" }}><Link to={`${aa.link == null ? "" : aa.link}`}>{aa.name}</Link></Grid>)
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
          <Box className={"side_menu"} >
            
            {/* 로그인 */}
            <Grid container display={loginFlag?{sm:"inherit"}:{sm:"none"}} >
              <Grid container className={"my_profile"}>
                <Grid item sm={6} xs={0}>
                  <img src={member.info.profile}></img>
                </Grid>
                <Grid item sm={6} xs={0}>
                  내이름
                </Grid>
                
              </Grid>
              
              <Grid container className={"my_info"}>
                  <Grid item sm={6}>레벨</Grid>
                  <Grid item sm={6}>{memberInfo.level}</Grid>
                  
                  <Grid item sm={6}>방문</Grid>
                  <Grid item sm={6}>{memberInfo.visit}</Grid>

                  <Grid item sm={6}>캐시</Grid>
                  <Grid item sm={6}>{memberInfo.point}</Grid>

                  <Grid item sm={6}>친구</Grid>
                  <Grid item sm={6}>{memberInfo.friend}</Grid>
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
          <Box className={"side_menu_list"}>
            {menuContent}
          </Box>
  
        </Grid>
      </>
  );
}