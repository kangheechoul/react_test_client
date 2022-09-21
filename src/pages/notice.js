import React, { useState, useEffect } from "react";
import {Banner} from "../components/banner";

export const Notice = () => {
  
  return(
    <>
    <p style={{fontSize:'20px'}}>공지사항</p>
    <Banner width={"50%"}/>
    </>
  );
}
