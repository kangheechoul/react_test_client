import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Button } from "@mui/material";
import "../assets/css/common.css";
import Logo from "../assets/images/dog.jpg";


export const BoxList = ({title, data}) =>{

    const[viewTitle, setViewTitle] = useState("");

    useEffect(()=>{
        if(title == "friend"){
            setViewTitle("친구목록");
        }
    },[]);
    

  return (
      <>
       {/* 내 정보 박스 */}
      <Box sx={{fontSize:"24px", display:"inline-block",width:"100%", height:"5%", borderBottom:"2px solid black",fontWeight:"bold", backgroundColor:"white"}}>
        {viewTitle}
      </Box>

      {/* 박스형 게시글 리스트 */}
      <Box className={"boxList"} sx={{minHeight:"95%" , backgroundColor:"#dcdcdc"}}>
        
        <Grid container spacing={2} sx={{pt:"1%", maxHeight:"100%", minHeight:"95%", px:"2%", py:"1%" }}>

          {/* 아이템 */}
          <Grid item xs={12} sm={6}>
              <Grid container sx={{padding:"1%", backgroundColor:"white", borderRadius:"12px", boxShadow:"3px 3px 3px 1px gray", maxHeight:"inherit"}}>
                <Grid item sm={3} xs={3} sx={{maxHeight:"inherit", margin:"auto 0", padding:"2%", textAlign:"center"}}>
                  <img src={Logo} style={{width:"80%", height:"80%", borderRadius:"10%"}}/>
                </Grid>
                <Grid item sm={9} xs={9} sx={{maxHeight:"inherit"}}>
                  <Grid container sx={{pt:"5%"}}>
                    <Grid item sm={6} xs={6} sx={{px:"2%", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", fontWeight:"bold"}}>
                      타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀
                    </Grid>
                    <Grid item sm={2} xs={2} sx={{textAlign:"left", fontWeight:"bold"}}>
                      3
                    </Grid>
                    <Grid item sm={2} xs={2} sx={{fontWeight:"bold"}}>
                      {/* new 아이콘 */}
                      {/* <Box sx={{textAlign:"center", backgroundColor:"red", color:"white",padding:"0 5%", borderRadius:"5%"}}>
                        new
                      </Box> */}
                      {/* 빨간 배경 숫자 아이콘 */}
                      <Box sx={{textAlign:"center", backgroundColor:"red", color:"white", width:"50%",borderRadius:"50%"}}>
                        3
                      </Box>
                    </Grid>
                    <Grid item sm={2} xs={2} sx={{textAlign:"center"}}>
                      13:13
                    </Grid>
                  </Grid>

                  <Grid container sx={{pt:"10%"}}>
                    <Grid item sm={8} xs={8} sx={{px:"2%", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", color:"gray"}}>
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