// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box, Grid } from "@mui/material";

import {Schedules} from './pages/schedule';
import {Friends} from './pages/friends';
import {Notice} from './pages/notice';
import {Login} from './pages/login';
import {Main} from './pages/main';


const App = () =>{
  
  return(
    
    <div style={{backgroundColor:"#BECDFF"}}>
      <Grid container>
        <Grid item width={{sm:"80%", xs:"100%"}} ml={{sm:"10%", xs:"0px"}} sx={{px:"5%",backgroundColor:"white"}}>
          <BrowserRouter>
            <Routes>
              <Route path="/schedules" element={<Schedules/>}/>
              <Route path="/friends" element={<Friends/>}/>
              <Route path="/notice" element={<Notice/>}/>
              <Route path="/login" element={<Login name = "희철" status = "1"/>}/>
              <Route path="/" element={<Main/>}/>
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
