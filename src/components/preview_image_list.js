import React, { useState, useEffect } from "react";
import { Grid, Box, Table , TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import '../assets/css/common.css';

import image from "../assets/images/dog.jpg";

// 게시판 미리보기
export const PreViewImageList = (props) => {
    let title = props.title;

    const [viewTitle, setViewTitle] = useState("일상공유");
    const [viewList, setViewList] = useState([]);
    useEffect(()=>{

    },[]);
  
    return(
    <>
        <Box className={"preview_list"}>
            <Box className={"preview"}>
                <Box className={"title"}>
                    <span>{viewTitle}</span>
                    <Link to={"/"}>더보기</Link>
                </Box>
                <Box className={"gallery"}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Grid container className={"album_list"}>
                                <Grid item xs={4} sm={4} className={"album"}>
                                    <Box className={"album_content"}>
                                        <img src={image} ></img>
                                        <Box className={"album_info"}>
                                            <Box>
                                                <span>제목제목제목제목제목제목제목제목제목제목제목제목</span>
                                                <span className={"comment_count"}>[3]</span>
                                                </Box>
                                            <Box>15:30</Box>
                                            <Box>조회 200</Box>
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
