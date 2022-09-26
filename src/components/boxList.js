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
      <Box sx={{fontSize:"24px", width:"100%", height:"5%", borderBottom:"2px solid black",fontWeight:"bold", backgroundColor:"white"}}>
        {viewTitle}
      </Box>

      {/* 박스형 게시글 리스트 */}
      <Box className={"boxList"} sx={{minHeight:"95%" , backgroundColor:"#dcdcdc"}}>
        
        <Grid container  sx={{pt:"1%", maxHeight:"100%", minHeight:"95%", px:"2%", py:"1%" }}>

          {/* 아이템 */}
          <Grid item xs={12} sm={6} sx={{maxHeight:"15vh", minHeight:"15vh",padding:"1%", backgroundColor:"red"}}>
            <Card sx={{backgroundColor:"white", width:"100%", maxHeight:"100%", minHeight:"100%"}}>
              <Grid container sx={{minHeight:"100%"}}>
                <Grid item sm={3} xs={3} sx={{backgroundColor:"yellowgreen", minHeight:"100%", padding:"2%"}}>
                  {/* <img src={Logo} style={{width:"96%", maxHeight:"100vh"}}/> */}
                </Grid>
                <Grid item sm={9} xs={9} sx={{backgroundColor:"green",minHeight:"100%"}}>
                  xxx
                </Grid>
              </Grid>
            </Card>
          </Grid>
          

        </Grid>
      </Box>
      

        
      </>
  );
}