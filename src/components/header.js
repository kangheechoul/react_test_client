import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import  HeaderService  from '../service/header';
import { Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

import "../assets/css/header.css";

export const Header = () =>{

    // 가져올 메뉴
    const [data , setData] = useState([]);

    // 메뉴 타이틀 목록
    const menuTitles = [];
    const viewMenus = [];
    
    // 보여줄 메뉴
    const [viewMenu, setViewMenu] = useState([]);

    // 헤더 메뉴 가져오기
    // 첫 렌더링 될때 가져오기[] 선언
    let temp = new HeaderService();
    useEffect(()=>{
        temp.get_menu_list().then((result)=>{
            setData(result);
        });
    }, []);

    // 메뉴 클릭시 보여질 하위 메뉴들
    const menu_view = (parent_idx) => {
        console.log(viewMenus[parent_idx]);
    }

    // 헤더 메뉴 html 태그 화 하기
    let menu_list = data.map((a)=>{
        let group_title = a.title;
        let group_idx = a.idx;
        menuTitles.push(<Nav.Link >{group_title}</Nav.Link>);

        let li = a.list.map((aa)=>{
            return <li key={aa.idx}>{aa.name}</li>;
        });

        // return <li key={a.idx}>{group_title}<ul style ={{display:"block"}}>{li}</ul></li>;
        return <ul style ={{display:"block"}}>{li}</ul>;




    });
    
    

    return (
        <>
        <div className={"MainHead"}>

        <div className={"HeadLink"}>
            <Link to={"/"}>로그인</Link> |
            <Link to={"/"}>회원가입</Link> |
            <Link to={"/"}>공지사항</Link> |
            <Link to={"/"}>이벤트</Link>
        </div>

        <div className={"HeadLogo"}>
            <img src={"./assets/image/dog.jpg"}/>
        </div>
        
        <Navbar bg={"primary"} variant={"dark"} style={{padding:"0.5% 2%",marginTop:"2%"}}>
            <Navbar.Brand>Menu</Navbar.Brand>
            <Nav className={""}>
                {menuTitles}
                {/* <Nav.Link href={"#11"}>메뉴1</Nav.Link>
                <Nav.Link href={"#22"}>메뉴2</Nav.Link>
                <Nav.Link href={"#33"}>메뉴3</Nav.Link> */}
            </Nav>
            
            
        </Navbar>
        <div style={{display:"block"}}>
            {menu_list}
        </div>
            
                

        </div>
        </>
    );
}