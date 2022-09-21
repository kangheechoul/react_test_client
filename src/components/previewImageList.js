import React, { useState, useEffect } from "react";
import { Grid, Box, Table , TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import '../assets/css/common.css';

import image from "../assets/images/dog.jpg";

// 게시판 미리보기
export const PreViewImageList = (props) => {
    let title = props.title;

    const [viewTitle, setViewTitle] = useState("");
    const [viewList, setViewList] = useState([]);
    useEffect(()=>{

    },[]);
  
    return(
    <>
        <Box sx={{width:"100%", minHeight:"20vh", mt:"3%", mb:"2%", py:"3%", px:"5%"}}>
            <Box sx={{width:"100%", mr:"10%"}}>
                <Box sx={{width:"100%", mb:"3%", borderBottom:"1px solid black"}}>
                    <span style={{fontWeight:"bold", textAlign:"left", fontSize:'20px'}}>{viewTitle}</span>
                    <Link style={{fontSize:"13px",float:"right", textDecoration:"none"}} to={"/"}>더보기</Link>
                </Box>
                <Box className={"previewListContent"} sx={{minHeight:"25vh"}}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={4} sx={{width:"100%", maxHeight:"25vh"}}>
                                    <Box sx={{width:"100%", height:"100%", textAlign:"center"}}>
                                        <img src={image} style={{width:"80%", height:"80%",padding:"10%"}}></img>
                                        <Box sx={{width:"100%", height:"20%", textAlign:"center"}}>
                                            정보
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Box>
        </Box>
    </>
  );
}
