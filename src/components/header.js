import React, { useEffect, useState }from "react";
import  HeaderService  from '../service/header';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Header = () =>{

    const [data , setData] = useState([]);
    let temp = new HeaderService();
    useEffect(()=>{
        temp.get_menu_list().then((result)=>{
            setData(result);
        });
    }, []);

    let menu_list = data.map((a)=>{
        let group_title = a.title;

        let li = a.list.map((aa)=>{
            return <li key={aa.idx}>{aa.name}</li>;
        });


        return <li key={a.idx}>{group_title}<ul style ={{display:"block"}}>{li}</ul></li>;
    });

    return (
        <>
        <div>
            <h3>헤더입니다.</h3>
            <div>메뉴
                <ul>
                    {menu_list}
                </ul>
            </div>
        </div>
        </>
    );
}