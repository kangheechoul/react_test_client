import React, { useState, useEffect } from "react";
import { Grid, Box, Table , TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import '../assets/css/common.css';

// 게시판 미리보기
export const PreViewList = (props) => {
    let title = props.title;

    const [viewTitle, setViewTitle] = useState("");
    const [viewList, setViewList] = useState([]);
    useEffect(()=>{
        if(title == "latest"){
            setViewTitle("최신글");
        }else if(title == "notice"){
            setViewTitle("공지사항");
        }else if(title == "event"){
            setViewTitle("이벤트");
        }else if(title == "free"){
            setViewTitle("자유게시판");
        }else if(title == "getFriends"){
            setViewTitle("친구구해요");
        }
        let temp = [];
        for(let i = 0; i < 4; i++){
            let li = <li key={i} style={{listStyle:"none", borderBottom:"1px solid gray", marginBottom:"2px", padding:"0 2%"}}>
                <Box sx={{display:"inline-block", width:"65%"}}>
                    테스트 제목
                </Box>
                <Box sx={{display:"inline-block", width:"15%", textAlign:"right", fontSize:'13px', color:"gray"}}>
                    1,000
                </Box>
                <Box sx={{display:"inline-block", width:"20%", textAlign:"right", fontSize:"13px", color:"black"}}>
                    16:20
                </Box>
                </li>;

            temp.push(li);
        }
        setViewList(temp);
    },[]);
  
    return(
    <>
        <Box sx={{width:"100%", minHeight:"20vh", mt:"3%", mb:"2%", py:"3%", px:"5%"}}>
            <Box sx={{width:"100%", mr:"10%"}}>
                <Box sx={{width:"100%", mb:"3%", borderBottom:"1px solid black"}}>
                    <span style={{fontWeight:"bold", textAlign:"left", fontSize:'20px'}}>{viewTitle}</span>
                    <Link style={{fontSize:"13px",float:"right", textDecoration:"none"}} to={"/"}>더보기</Link>
                </Box>
                <Box className={"previewListContent"}>
                    <ul style={{padding:"0 2%"}}>
                        {viewList}
                    </ul>
                </Box>
            </Box>
        </Box>
    </>
  );
}
