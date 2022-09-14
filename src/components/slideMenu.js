import React, { useEffect, useState }from "react";
import { Grid, Box } from "@mui/material";

import "../assets/css/header.css";

export const SlideMenu = ({open,setOpen}) =>{

    return (
        <>
        <Box container className={open ? "slideMenu open":"slideMenu"}>
          <Grid item xs={12} sm={12} lg={12}>
            <Box sx={{textAlign:"right", padding:"5px"}}> 
              <span onClick={()=>{setOpen(false);}}>닫기</span>
            </Box>
          </Grid>
        </Box>
        </>
    );
}