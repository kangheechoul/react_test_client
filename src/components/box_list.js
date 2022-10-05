import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Button } from "@mui/material";
import "../assets/css/common.css";
import Logo from "../assets/images/dog.jpg";


export const BoxList = ({title, data}) =>{

    const[viewTitle, setViewTitle] = useState("");

    useEffect(()=>{
          setViewTitle(title);
    },[]);
    

  return (
      <>
       {/* 내 정보 박스 */}
      <Box className={"list_title"}>
        <Grid container sx={{maxHeight:"inherit"}}>
          <Grid item sm={6}>
            <span>{viewTitle}</span>
          </Grid>
          <Grid item sm={6} sx={{textAlign:"right"}}>
            <input type={"text"} className={"search_text"} placeholder={"검색"}></input>
            <Button onClick={()=>{}}>검색</Button>
          </Grid>
        </Grid>
      </Box>

      {/* 박스형 게시글 리스트 */}
      <Box className={"list_back"}>
        
        <Grid container className={"list_content"} spacing={2} >

          {/* 아이템 */}
          <Grid item xs={12} sm={6}>
              <Grid container className={"box_list_item"}>

                <Grid item className={"box_img"} sm={3} xs={3}>
                  <img src={Logo}/>
                </Grid>

                <Grid item className={"box_content"} sm={9} xs={9}>


                  <Grid container className={"content_title"} >

                    <Grid item sm={6} xs={6}>
                      타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀
                    </Grid>

                    <Grid item sm={2} xs={2}>
                      3
                    </Grid>

                    <Grid item sm={2} xs={2}>
                      <Box className={"list_count_icon"} >
                        3
                      </Box>
                    </Grid>

                    <Grid item sm={2} xs={2}>
                      13:13
                    </Grid>
                  </Grid>

                  <Grid container className={"content_content"} >
                    <Grid item sm={8} xs={8}>
                      내용내용내용내용내용내용내용내용내용내용
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
          </Grid>
          

        </Grid>
      </Box>
      

        
      </>
  );
}