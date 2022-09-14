import React, { useEffect, useState }from "react";
import { Grid, Box } from "@mui/material";

import "../assets/css/header.css";

export const Footer = () =>{

    return (
        <>
        <Grid container sx={{mt:"20px"}}>
          <Grid item xs={12} sm={12} lg={12} sx={{backgroundColor:"black", color:"white", textAlign:"center"}}>
            <Box>
              하단
            </Box>
          </Grid>
        </Grid>
        </>
    );
}