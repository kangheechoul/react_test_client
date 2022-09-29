import React from "react";

import axios from 'axios';
import config from "../config.json";


class Lib{

    constructor(){

    }   
    // 폴더 import 하기
    importAll=(r)=>{
        // let files = {};
        let files = [];
        r.keys().map((item) => {
            // files[item.replace("./", "")] = r(item);
            files.push(r(item));
        });
        return files;
    }

    user_check = async() => {

        let user_idx = window.localStorage.getItem("id");
        let token = window.localStorage.getItem("token");

        let data = await axios.post(config.api + "user/check",{
            user_idx : user_idx
        },{
            headers:{
                Authorization : token
            }
        });
        if(data.status != "200"){
            // 수신 불가
            return data.status;
        }
        return 1;
    }
}

export default Lib;