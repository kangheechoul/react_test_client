import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

let data = [
    {
        "title" : "그룹1",
        "idx" : 1,
        "list":[
            {idx : 1, name : "1 메뉴1"},
            {idx : 2, name : "1 메뉴2"},
            {idx : 3, name : "1 메뉴3"},
        ],
    },
    {
        "title" : "그룹2",
        "idx" : 2,
        "list":[
            {idx : 4, name : "2 메뉴1"},
            {idx : 5, name : "2 메뉴2"},
            {idx : 6, name : "2 메뉴3"},
        ],
    },
    {
        "title" : "그룹3",
        "idx" : 3,
        "list":[
            {idx : 7, name : "3 메뉴1"},
            {idx : 8, name : "3 메뉴2"},
            {idx : 9, name : "3 메뉴3"},
        ],
    }
];

export const Header = () =>{

    let menu_list = data.map((a)=>{

        let group_title = a.title;

        let li = a.list.map((aa)=>{
            return <li key={aa.idx}>{aa.name}</li>;
        });
        

        return <li key={a.idx}>{group_title}<ul style ={{display:"none"}}>{li}</ul></li>;
    });

    return(
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