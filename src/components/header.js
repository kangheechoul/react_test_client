import React, { useEffect, useState, useRef }from "react";
import { Link, useLocation } from 'react-router-dom';
import  HeaderService  from '../service/header';
import Logo from "../assets/images/dog.jpg";
import { Grid, Box, Button } from "@mui/material";

import {SlideMenu} from './slide_menu'; 
import Lib from '../service/lib'

import "../assets/css/header.css";

export const Header = ({user, setUser}) =>{

    const [menu, setMenu] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [slideOpen, setSlideOpen] = useState(false);

    const [loginFlag, setLoginFlag] = useState(false);

    let lib = new Lib();

    const logout = () =>{
        if(window.confirm("로그아웃 하시겠습니까")){
            console.log("로그아웃됨");
            lib.logout();
            setUser({});
        }
    }
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


    
    useEffect(()=>{
        console.log("로그인값 변경");
        if(user.user_idx > 0){
            setLoginFlag(true);
        }else{
            setLoginFlag(false);
        }
    },[user]);


    let head = new HeaderService();
    
    useEffect(()=>{
        head.get_menu_list().then((result)=>{
            setMenu(result);
        });
    },[]);
    
    let menuTitles = [];
    let menuLists = [];

    menu.map((a,b)=>{
        menuTitles.push(<Grid item key={b} sm={2} onClick={()=>{setMenuOpen(true)}}>{a.title}</Grid>);

        let li = [];
        a.list.map((aa)=>{
            console.log(aa);
            li.push(<li key={aa.idx}><Link to={`${aa.link == null ? "" : aa.link}`} onClick={()=>{setMenuOpen(false)}}>{aa.name}</Link></li>);
        })
        menuLists.push(<Grid item key={a.idx} sm={2}><ul className={"menu_ul"} key={b}>{li}</ul></Grid>);
    });

    return (
        <>
        
        {/* 모바일 하단 메뉴 */}
        <Grid container className={"bottom_menu"} display={{sm:"none"}}>
            <Grid item xs={3}>
                <Button>로그인</Button>
            </Grid>
            <Grid item xs={3}>
                <Link to={"/friends"}><Button>친구</Button></Link>
            </Grid>
            <Grid item xs={3}>
                <Button>채팅방</Button>
            </Grid>
            <Grid item xs={3}>
                <Link to={"/mypage"}><Button>마이페이지</Button></Link>
            </Grid>
        </Grid>
        <Grid container >
            {/* PC, 모바일 공통 */}
            <Grid item xs={12} sm={12} sx={{pb:"30px",pt:"20px"}} >
                <Box sx={{height:"80px"}}>
                    <Grid container spacing={3} >
                        {/* 사이드 로고 */}
                        <Grid item display={{xs:"none", sm:"block"}} sm={4} xs={0}  sx={{textAlign:"center"}}>
                            <img src={Logo} style={{width:"50px"}}></img>
                        </Grid>

                        {/* 메인로고 */}
                        <Grid item xs={12} sm={4}  sx={{textAlign:"center", pt:"10px"}}>
                            <h3 onClick={()=>{window.location.href="/"}}>메인 로고</h3>
                        </Grid>

                        <Grid item xs={0} sm={4} display={{xs:"none", sm:"block"}} className={"head_link"}>
                            {loginFlag ? <a style={{color:"gray"}} href={"#javascript"} onClick={()=>{logout()}}>로그아웃</a> :<Link to="/login">로그인</Link>} |
                            <Link to="/mypage">마이페이지</Link> |
                            <Link to="">공지사항</Link> |
                            <Link to="">이벤트</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* xs 가되면 숨겨짐 ( PC 버전 메뉴 )  */}
            <Grid item display={{xs:"none", sm:"block"}} sm={12} className={"main_menu"}>
                <Box >
                    <Grid container spacing={4}>
                        <Grid item sm={2} sx={{textAlign:"center"}} onClick={()=>{setMenuOpen(!menuOpen)}}>
                            <span >{menuOpen ? "닫기" :"메뉴"}</span>
                        </Grid>
                        {menuTitles}
                    </Grid>
                </Box>
                {/* 펼치면 나오는 div */}
                <Box className={"open_menu"+ (menuOpen?" open":"") }>
                    <Grid container >
                        <Grid item sm={1}>

                        </Grid>
                        {menuLists}
                    </Grid>
                </Box>
            </Grid>

            {/* sm 이상이면 숨겨짐 ( 모바일 버전 메뉴 )  */}
            <Grid item display={{xs:"block", sm:"none"}} xs={12} sx={{backgroundColor:"gray", color:"white", padding:"5px"}}>
                <Box>
                    <span onClick={()=>{setSlideOpen(true);}}>메뉴</span>
                </Box>
            </Grid>

            {/* xs 사이즈에서만 슬라이드 메뉴 출력 ( 모바일 사이드 메뉴 ) */}
            <Grid item display={{xs:"block", sm:"none"}} xs={12}>
                <SlideMenu open={slideOpen} setOpen={setSlideOpen} menu={menu} user={user} loginFlag={loginFlag}/>
            </Grid>
        </Grid>
        </>
    );
}