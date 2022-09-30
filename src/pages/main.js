import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Banner} from "../components/banner";
import {PreViewList} from "../components/preview_list";
import {PreViewImageList} from "../components/preview_image_list";

import '../assets/css/common.css';

export const Main = ({user}) => {

  return(
    <>
    

      {/* 중단 */}
      <Grid container>
        <Banner width={"100%"}/>

        {/* 게시글 목록 미리보기 */}

        <Grid container>
          {/* 공지사항 */}
          <Grid item sm={12} xs={12}>
            <PreViewList title={"notice"}/>
          </Grid>
        </Grid>

        <Grid container>
          {/* 공지사항 */}
          <Grid item sm={6} xs={12}>
            <PreViewList title={"latest"}/>
          </Grid>

          {/* 이벤트 */}
          <Grid item sm={6} xs={12}>
            <PreViewList title={"event"}/>
          </Grid>
        </Grid>

        <Grid container>
          {/* 자유게시판 */}
          <Grid item sm={6} xs={12}>
            <PreViewList title={"free"}/>
          </Grid>
          
          {/* 친구구해요 */}
          <Grid item sm={6} xs={12}>
            <PreViewList title={"getFriends"}/>
          </Grid>
        </Grid>

        {/* 갤러리 미리보기 */}
        <Grid container>
          <PreViewImageList/>
        </Grid>


      </Grid>

      {/* 하단 */}
      <Footer/>
      {/* <BottomMenu/> */}

    </>
  );
}
