import React from "react";

// 컴포넌트
import {Header} from "../components/header";
import {InputText} from "../components/input_text";
import {Button} from "../components/button";

// 서비스
import Schedule from "../service/schedule";



export const Login = ({name, status}) => {
    
  const login_event = () => {
    alert("로그인 시도하기");
    let schedule = new Schedule();
    console.log(schedule.getCount());
  }

  return(
    <>
    <Header/>
    <p style={{fontSize:'20px'}}>{name} {status === "0" ? "로그인" : "로그아웃"}</p>
    <InputText name = "id" className = "content_id" placeholder="아이디" /><br/>
    
    <InputText type = "password" name = "password" className = "content_pw" placeholder="패스워드"/>
    <Button value = "로그인" clickEvent={login_event} />
    </>
  );
}

