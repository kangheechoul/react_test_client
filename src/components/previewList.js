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

        // 테스트 데이터
        let temp = [];
        for(let i = 0; i < 4; i++){
            let li = <li key={i} >
                <Box>
                    <span>테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 테스트 제목테스트 </span>
                    <span className={"commentCount"}>[3]</span>
                </Box>
                <Box >
                    1,000
                </Box>
                <Box>
                    16:20
                </Box>
                </li>;

            temp.push(li);
        }
        setViewList(temp);
    },[]);
  
    return(
    <>
        <Box className={"previewList"} >
            <Box className={"preview"}>
                <Box className={"title"}>
                    <span>{viewTitle}</span>
                    <Link to={"/"}>더보기</Link>
                </Box>
                <Box className={"contentList"}>
                    <ul>
                        {viewList}
                    </ul>
                </Box>
            </Box>
        </Box>
    </>
  );
}
