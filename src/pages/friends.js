import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {SideMenu} from "../components/sideMenu";
import {Footer} from "../components/footer";
import {BoxList} from "../components/boxList";

import '../assets/css/common.css';

export const Friends = () => {

    const [sideMenuFlag, setSideMenuFlag] = useState(true);
    const [friendList, setFriendList] = useState([]);

    useEffect(()=>{
      let data = [];
      setFriendList(data);
    },[])

  return(
    <>
    <Box sx={{width:"100%", minHeight:"100%"}} paddingBottom={{xs:"15%", sm:"2%"}}>
        {/*  상단  */}  
        <Grid container>
            <Header/>
        </Grid>

        <Grid container sx={{minHeight:"100vh", mt:"10%"}}>
            {sideMenuFlag && 
            <Grid item sm={3} lg={2} xs={0} display={{xs:"none", sm:"inline-block"}}>
                <SideMenu/>
            </Grid>
            }

            <Grid item sm={sideMenuFlag ? 9 : 12} lg={10} xs={12} sx={{display:"inline-block", minHeight:"20vh" }} >
              <BoxList title={"friend"} data={friendList}/>
            </Grid>

        </Grid>
        
        

        {/* 하단 */}
        <Footer/>
        {/* <BottomMenu/> */}

    </Box>
    </>
  );
}
