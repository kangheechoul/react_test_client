import React, { useEffect, useState }from "react";
import { Link } from 'react-router-dom';
import  HeaderService  from '../service/header';
import { Container, Nav, Navbar, NavDropdown, NavItem, Form, Button,
Row,
} from "react-bootstrap";

import "../assets/css/header.css";

export const Header = () =>{

    // 가져올 메뉴
    const [data , setData] = useState([]);

    // 메뉴 타이틀 목록
    const menuTitles = [];
    const viewMenus = [];
    
    // 보여줄 메뉴
    const [viewFlag, setViewFlag] = useState("none");
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
        if(viewMenus[parent_idx].key === viewMenu.key){
            
            setViewFlag(viewFlag == "block" ? "none" : "block");
        }else{
            setViewFlag("block");
            setViewMenu(viewMenus[parent_idx]);
        }
    }

    // 헤더 메뉴 html 태그 화 하기
    data.map((a,b)=>{
        let group_title = a.title;
        let group_idx = a.idx;
        menuTitles.push(<Nav.Link key={group_idx} href ={"#menu_group"+group_idx} onClick={()=>{menu_view(b)}}>{group_title}</Nav.Link>);

        let menu_list = a.list.map((aa)=>{
            return <span key={aa.idx}>{aa.name}</span>;
        });

        viewMenus.push(<div key={group_idx}>{menu_list}</div>);

    });

    return (
        <>
        <Container>
            <div className={"MainHead"}>

                <div className={"HeadLink"}>
                    <Link to={"/"}>로그인</Link> |
                    <Link to={"/"}>회원가입</Link> |
                    <Link to={"/"}>공지사항</Link> |
                    <Link to={"/"}>이벤트</Link>
                </div>

                <Row>
                    <div className={"HeadLogo"}>
                        <img src={"./assets/image/dog.jpg"}/>
                    </div>
                </Row>
                <Row>
                    <Navbar bg={"primary"} variant={"dark"} expand={"lg"} style={{padding:"0.5% 2%",marginTop:"2%"}}>
                    <Navbar.Brand>Menu</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="me-auto my-2 my-lg-1">
                            {menuTitles}
                        </Nav>
                        
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="검색어"
                            className="me-2"
                            aria-label="Search"
                            />
                        <Button variant="light" style={{maxWidth:"80px", minWidth:"60px"}}>검색</Button>
                    </Form>
                    </Navbar.Collapse>
                        
                    </Navbar>
                </Row>
                
                <Row >
                    <div className={"HeadMenuList"} style={{display:viewFlag}}>
                        {viewMenu}
                    </div>
                </Row>
                
            </div>
        </Container>
        
        </>
    );
}