import React from "react";
// import axios from "axios";
import axios from 'axios';
import config from "../config.json";

import Lib from './lib';

class User{

    constructor(){
        this.list = [];
        this.info = {};

        this.lib = new Lib();
    }

    login = async(where) => {
        let data = await axios.post(config.api + "user/login", where);
        console.log(data);
        
        // 
        if(data.status != "200"){
            // 수신 불가
            return data.status;
        }

        if(data.data.code == "1"){
            window.localStorage.setItem("token", data.data.token);
            window.localStorage.setItem("id", data.data.id);
            this.info={
                code:"1",
                message:"로그인에 성공하였습니다.",
                data : data.data.data
            }
        }else{
            this.info={
                code:data.data.code,
                message:"로그인 정보를 확인해주세요."
            }
        }
        
        return this.info;
    }

    get_info = async() => {
        let data = await axios.post(config.api+"user/info", {},this.lib.get_auth());
        if(data.status != 200){
            return {message:"통신오류", code:"999"};
        }
        if(data.data.code == "001"){
            return data.data;
        }else{
            alert("로그인정보가 만료되었습니다.");
            this.lib.logout();
        }
    }
}

export default User;