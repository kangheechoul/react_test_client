import React from "react";
// import axios from "axios";
import axios from 'axios';
import config from "../config.json";


class User{

    constructor(){
        this.list = [];
        this.info = {};
    }

    async login(where){
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
                message:"로그인에 성공하였습니다."
            }
        }else{
            this.info={
                code:data.data.code,
                message:"로그인 정보를 확인해주세요."
            }
        }
        
        return this.info;
    }
}

export default User;