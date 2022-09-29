import React , { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Box, Card, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { Link } from 'react-router-dom'; 

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";
// 서비스

import UserService from "../service/user";
import Lib from "../service/lib";

export const Mypage = () => {

    let lib = new Lib();

    useEffect(()=>{
        lib.user_check();
        
    },[]);
    
  return(
    <>
      <Box>
        마이페이지
      </Box>
    </>
  );
}

