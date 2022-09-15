import React from "react";
// import axios from "axios";
import axios from 'axios';
import config from "../config.json";


class Header{

    constructor(){
        this.list = [];
        this.info = [];
    }

    async get_menu_list(){
        let data = await axios.get(config.api + "header/get_menu");
        if(data.status != "200"){
            // 수신 불가
            return data.status;
        }
        this.list = data.data;
        return this.list;
    }
}

export default Header;