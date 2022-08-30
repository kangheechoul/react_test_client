import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// 컴포넌트
import {Header} from "../components/header";
import {InputText} from "../components/input_text";
import {CustomButton} from "../components/button";

// 서비스
import Schedule from "../service/schedule";



export const Login = () => {
    
  const test = () =>{
    console.log("aa");
  }

  return(
    <>
    <Header/>
    <form>
      <InputText name = "id" className = "content_id" placeholder="아이디" /><br/>
      <InputText type = "password" name = "password" className = "content_pw" placeholder="패스워드"/>
      <CustomButton type = "submit" clickEvent = {test} value = "로그인" variant = "success outline-dark"/>
    </form>
    </>
  );
}

