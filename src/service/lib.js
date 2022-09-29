import React from "react";


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
}

export default Lib;