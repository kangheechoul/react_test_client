import React , { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import { Grid, Box, Card, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { Link, Navigate, useNavigate } from 'react-router-dom'; 

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";

import UserService from "../service/user";


// 서비스



export const Login = ({setUser, user}) => {

  const [input, setInput] = useState(null);
  const [info, setInfo] = useState();

  let service = new UserService();

  const nav = useNavigate();
  

  const submit_handle = (e) =>{

    if(e.target.id.value == ""){
      alert("아이디를 작성해주세요");
      e.target.id.focus();
      e.preventDefault();
      return false;
    }

    if(e.target.password.value == ""){
      alert("비밀번호를 작성해주세요");
      e.target.password.focus();
      e.preventDefault();
      return false;
    }

    setInfo({id : e.target.id.value,password : e.target.password.value});
    
    e.preventDefault();
  }
  useEffect(()=>{
    if(info !== undefined){
      service.login(info).then((result)=>{
        // console.log(result);
        
        alert(result.message);
        if(result.code == "1"){
          setUser(result.data);
          
          nav("/", {state:{user:result.data}});

        }
      })
    }
    
  },[info]);

    
  return(
    <>
      {/* 상단 */}
      <Box className={"login_title"}>
          로그인
      </Box>
      <Grid container className={"login_content"}>

        {/* 중단 */}
        <Grid container sx={{minHeigh:"10vh"}}>
          <Grid item xs={0} sm={2} lg={3}>
          </Grid>
          <Grid item xs={12} sm={8} lg={6}>
            <Box className={"form_box"}>
              <form onSubmit={(event)=>{submit_handle(event);}}>
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
            <Grid item sm={2} xs={0} lg={3}>
            </Grid>
            <Grid item sm={8} xs={12} lg={6}>
              <Banner width={"100%"}/>
            </Grid>
            <Grid item sm={2} xs={0} lg={3}>
            </Grid> 
        </Grid>

      </Grid>
      {/* 하단 */}
      <Footer/>
    </>
  );
}

