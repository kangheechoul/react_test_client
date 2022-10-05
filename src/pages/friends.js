import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {SideMenu} from "../components/side_menu";
import {Footer} from "../components/footer";
import {BoxList} from "../components/box_list";
import {Pagenation} from "../components/pagenation";

import '../assets/css/common.css';

export const Friends = () => {

    const [sideMenuFlag, setSideMenuFlag] = useState(true);
    const [friendList, setFriendList] = useState([]);

    const [page,setPage] = useState(6);

    let count = 21;
    useEffect(()=>{
      let data = [];
      setFriendList(data);

      setPage(6);

    },[])

  return(
    <>
    <Box sx={{width:"100%", minHeight:"100%"}} paddingBottom={{xs:"15%", sm:"2%"}}>
        {/*  상단  */}  
        <Grid container>
            {/* <Header/> */}
        </Grid>

        <Grid container sx={{minHeight:"100vh", mt:"10%", mb:"5%"}}>
            {sideMenuFlag && 
            <Grid item sm={3} lg={3} xs={0} display={{xs:"none", sm:"inline-block"}}>
                <SideMenu/>
            </Grid>
            }

            <Grid item sm={sideMenuFlag ? 9 : 12} lg={9} xs={12} sx={{display:"inline-block", minHeight:"20vh" }} >
              <BoxList title={"내 친구"} data={friendList}/>
              <Pagenation page={page} setPage={setPage} max={count}/>
            </Grid>

        </Grid>
        
        

        {/* 하단 */}
        <Footer/>
        {/* <BottomMenu/> */}

    </Box>
    </>
  );
}
