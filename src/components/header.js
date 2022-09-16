import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import  HeaderService  from '../service/header';
import Logo from "../assets/images/dog.jpg";
import { Grid, Box, Button } from "@mui/material";

import {SlideMenu} from './slideMenu'; 

import "../assets/css/header.css";

export const Header = () =>{

    const [menu, setMenu] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [slideOpen, setSlideOpen] = useState(false);
    
    
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
            li.push(<li key={aa.idx}>{aa.name}</li>);
        })
        menuLists.push(<Grid item key={a.idx} sm={2}><ul className={"menuUl"} key={b}>{li}</ul></Grid>);
    });

    return (
        <>
        <SlideMenu open={slideOpen} setOpen={setSlideOpen} menu={menu} member={member}/>
        {/* 모바일 하단 메뉴 */}
        <Grid container className={"bottomMenu"} display={{sm:"none"}}>
            <Grid item xs={3}>
                <Button>로그인</Button>
            </Grid>
            <Grid item xs={3}>
                <Button>친구</Button>
            </Grid>
            <Grid item xs={3}>
                <Button>채팅방</Button>
            </Grid>
            <Grid item xs={3}>
                <Button>마이페이지</Button>
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
                            <h3>메인 로고</h3>
                        </Grid>

                        <Grid item xs={0} sm={4} display={{xs:"none", sm:"block"}} className={"HeadLink"}>
                            <Link to="">로그인</Link> |
                            <Link to="">마이페이지</Link> |
                            <Link to="">공지사항</Link> |
                            <Link to="">이벤트</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* xs 가되면 숨겨짐 ( PC 버전 메뉴 )  */}
            <Grid item display={{xs:"none", sm:"block"}} sm={12} className={"mainMenu"}>
                <Box >
                    <Grid container spacing={4}>
                        <Grid item sm={2} sx={{textAlign:"center"}} onClick={()=>{setMenuOpen(!menuOpen)}}>
                            <span >{menuOpen ? "닫기" :"메뉴"}</span>
                        </Grid>
                        {menuTitles}
                    </Grid>
                </Box>
                {/* 펼치면 나오는 div */}
                <Box className={"openMenu"+ (menuOpen?" open":"") }>
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
        </Grid>
        </>
    );
}