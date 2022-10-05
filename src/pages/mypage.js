import React , { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Box, Card, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { Link } from 'react-router-dom'; 

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";
// 서비스

import UserService from "../service/user";

export const Mypage = () => {

    let service = new UserService();

    useEffect(()=>{
      
      if(service.login_check()){
        service.get_info().then((result)=>{
          if(result.code != "001"){
            alert("로그인 실패");
          }
        });
      }
    },[]);
    
  return(
    <>
      <Box>
        마이페이지
      </Box>
    </>
  );
}

