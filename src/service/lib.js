import React from "react";


class Lib{

    constructor(){

    }   
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