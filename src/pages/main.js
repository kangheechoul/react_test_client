import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";


export const Main = () => {
  

  return(
    <>
    <Grid container sx={{width:"100%"}}>
      {/*  상단  */}
      <Grid container>
        <Header/>
      </Grid>

      {/* 중단 */}
      <Grid container>
        <Banner/>
      </Grid>

      {/* 하단 */}
      <Footer/>

    </Grid>
    </>
  );
}
