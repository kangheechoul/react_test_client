import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {Footer} from "../components/footer";

import '../assets/css/common.css';

export const Friends = () => {

    const [friendList, setFriendList] = useState([]);



  return(
    <>
    <Box sx={{width:"100%", minHeight:"100%"}} paddingBottom={{xs:"15%", sm:"2%"}}>
        {/*  상단  */}
          <Grid container>
            <Header/>
        </Grid>
        
        <Grid item display={{xs:"none", sm:"block"}} sm={4}>
            PC 버전 사이드 메뉴
        </Grid>
        

        {/* 하단 */}
        <Footer/>
        {/* <BottomMenu/> */}

    </Box>
    </>
  );
}
