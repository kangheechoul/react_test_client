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

    get_auth = () => {
        let token = window.localStorage.getItem("token");

        return {headers:{Authorization : token}};
    }

    logout = () => {
        window.localStorage.clear();
        window.location.replace("/");
    }

}

export default Lib;