// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, Grid, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

import {Header} from './components/header';

import {Schedules} from './pages/schedule';
import {Friends} from './pages/friends';
import {Notice} from './pages/notice';
import {Login} from './pages/login';
import {Main} from './pages/main';
import {Mypage} from './pages/mypage';

import "./assets/css/header.css";

import UserService from './service/user'


const App = () =>{

  const [user, setUser] = useState({});

  let service = new UserService();



  useEffect(()=>{
    let token = window.localStorage.getItem("token");
    const aa = async()=>{
      if(token !== undefined){
        let data = await service.get_info();
        if(data.code == "001"){
          setUser(data.data);
        }
      }
    }
    if(token != undefined){
      aa();
    }
  },[]);

  
  return(
    
    <div style={{backgroundColor:"#BECDFF"}}>
      
      <Grid container>
        <Grid item width={{sm:"80%", xs:"100%"}} ml={{sm:"10%", xs:"0px"}} sx={{px:"5%",backgroundColor:"white"}}>
          <Box sx={{width:"100%", minHeight:"100%"}} paddingBottom={{xs:"15%", sm:"2%"}}>
            
            <Grid container>
              <Header user={user} setUser={setUser}/>
            </Grid>

            <Routes>
              <Route path="/schedules" element={<Schedules/>}/>
              <Route path="/friends" element={<Friends/>}/>
              <Route path="/notice" element={<Notice/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/login" element={<Login setUser={setUser}/>}/>
              <Route path="/main" element={<Main/>}/>
              <Route path="/" element={<Main/>}/>
            </Routes>

          </Box>


        </Grid>
      </Grid>
    </div>
  );
}

export default App;
