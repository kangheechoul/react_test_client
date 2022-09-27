import React , { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Box, Card, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { Link } from 'react-router-dom'; 

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";


// 서비스



export const Login = () => {

  const [input, setInput] = useState(null);

  const submit_handle = (e) =>{
    
    e.preventDefault();
  }

    
  return(
    <>
      <Box sx={{width:"100%", minHeight:"100%"}} paddingBottom={{xs:"15%", sm:"2%"}}>
        {/*  상단  */}  
        <Grid container>
            <Header/>
        </Grid>

        {/* 상단 */}
        <Box className={"login_title"}>
            로그인
        </Box>
        <Grid container className={"login_content"}>

          {/* 중단 */}
          <Grid container sx={{minHeigh:"10vh"}}>
            <Grid item xs={0} sm={3}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={"form_box"}>
                <form onSubmit={(event)=>{submit_handle(event); return false;}}>
                  <Grid container>

                    <Grid className={"input_box"} item xs={12} sm={8}>
                      <Box>아이디</Box>
                      <input type={"text"} name={"id"}></input>
                      <Box>패스워드</Box>
                      <input type={"password"} name={"password"}></input>
                    </Grid>

                    <Grid item className={"button_box"} xs={12} sm={4} padding={{sm:"8% 3% 4% 3%", xs:"4% 3%"}}>
                      <button >로그인</button>
                    </Grid>

                    <Grid container spacing={1} className={"sub_links"}>
                      <Grid item xs={4} sm={4}><Link to={"/"}>회원가입</Link></Grid>
                      <Grid item xs={4} sm={4}><Link to={"/"}>아이디 찾기</Link></Grid>
                      <Grid item xs={4} sm={4}><Link to={"/"}>패스워드 찾기</Link></Grid>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
          

          <Grid container sx={{my:"5%"}}>
              <Grid item sm={3} xs={0}>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Banner width={"100%"}/>
              </Grid>
              <Grid item sm={3} xs={0}>
              </Grid>
          </Grid>

        </Grid>
        {/* 하단 */}
        <Footer/>
    </Box>
    </>
  );
}

