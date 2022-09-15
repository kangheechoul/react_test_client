import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {Footer} from "../components/footer";


export const Main = () => {
  

  return(
    <>
    <Grid container sx={{width:"100%"}}>
      {/*  상단  */}
      <Header />
      {/* 중단 */}
      <Grid container>

        {/* 중단 LEFT */}
        <Grid container>

        </Grid>

        {/* 중단 RIGHT */}
        <Grid container>
          {/* 중단 1 */}
          <Grid container>
                    
          </Grid>
          {/* 중단 2 */}
          <Grid container>
            
          </Grid>
          {/* 중단 3 */}
          <Grid container>
  
          </Grid>
        </Grid>

        
      </Grid>

      {/* 하단 */}
      <Footer/>

    </Grid>
    </>
  );
}
