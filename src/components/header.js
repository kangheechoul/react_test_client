import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import  HeaderService  from '../service/header';
import Logo from "../assets/images/dog.jpg";
import { Grid, Box } from "@mui/material";

import {SlideMenu} from './slideMenu'; 

import "../assets/css/header.css";

export const Header = () =>{

    const [open, setOpen] = useState(false);



    return (
        <>
        <SlideMenu open={open} setOpen={setOpen}/>
        <Grid container >
            {/* PC, 모바일 공통 */}
            <Grid item xs={12} sm={12} >
                <Box sx={{height:"80px", pt:"10px"}}>
                    <Grid container spacing={3} >
                        {/* 사이드 로고 */}
                        <Grid item sm={4} xs={4} sx={{textAlign:"center"}}>
                            <img src={Logo} style={{width:"50px"}}></img>
                        </Grid>

                        {/* 메인로고 */}
                        <Grid item sm={4} display={{xs:"none", sm:"block"}} sx={{textAlign:"center", pt:"10px"}}>
                            <h3>메인 로고</h3>
                        </Grid>

                        <Grid item sm={4} xs={8} className={"HeadLink"}>
                            <Link to="">로그인</Link> |
                            <Link to="">마이페이지</Link> |
                            <Link to="">공지사항</Link> |
                            <Link to="">이벤트</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* xs 가되면 숨겨짐 ( PC 버전 메뉴 )  */}
            <Grid item display={{xs:"none", sm:"block"}} sm={12} sx={{backgroundColor:"black", color:"white", padding:"5px"}}>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item>
                            메뉴
                        </Grid>
                        <Grid item>
                            메뉴1
                        </Grid>
                        <Grid item>
                            메뉴2
                        </Grid>
                        <Grid item>
                            메뉴3
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            {/* sm 이상이면 숨겨짐 ( 모바일 버전 메뉴 )  */}
            <Grid item display={{xs:"block", sm:"none"}} xs={12} sx={{backgroundColor:"gray", color:"white", padding:"5px"}}>
                <Box>
                    <span onClick={()=>{setOpen(true);}}>메뉴</span>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}