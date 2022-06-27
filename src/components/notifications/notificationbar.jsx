import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import * as React from 'react';

//import { FixedSizeList } from 'react-window';

import List from '@mui/material/List';

import { ListGroup } from "react-bootstrap";


export default function Notifications() {
    const [menuBody, setMenuBody] = useState([]);
    const [menuBodyRecent, setMenuBodyRecent] = useState([]);
    const [menu, setMenu] = useState(true);
    const [menuRecent, setMenuRecent] = useState(true);
    const [user, setUser] = useContext(userContext);
    const url = "https://localhost:3001";
    //console.log(user)
    useEffect(() => {
        findAll();
    }, [menu]);
    useEffect(() => {
        findAllRecent();
    }, [menuRecent]);
    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            console.log((`${url}`))
            const response = await fetch(`${url}`);
            const menus = await response.json();
            console.log(menus);
            const menuTableRows = menus.map((e) => {
                if (e.usernameNotification.username === user.username){
                    const url=e.url
                return (
                    <tr>
                        <a target="_blank" rel="noopener noreferrer" href={url}><td  width="200">{e.fieldFour}</td></a>
                    </tr>
                );
                }
            });
            setMenuBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }
    async function findAllRecent() {
        try {
            console.log((`${url}`))
            const response = await fetch(`${url}`);
            const menus = await response.json();
            console.log(menus);
            let total=0
            const Space ="  "
            const menuTableRows = menus.slice(0).reverse().map((e) => {
                
                if (total< 5){
                    const url=e.url
                    total=total+1
                return (
                    <tr>
                        <td>{e.usernameNotification.username}  </td>
                       
                        <a target="_blank" rel="noopener noreferrer" href={url}><td  width="200"></td></a>
                    </tr>
                );
                
                }
            });
            setMenuBodyRecent(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }
    return (
    
       <>
       <div>
         <h2>Notifications</h2>
            <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
        }}
        subheader={<li />}
        >
            
        <ListGroup>
            {menuBody}
        </ListGroup>
        </List>
        </div>
        <div>
         <h2>Recent Notifications</h2>
            <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
        }}
        subheader={<li />}
        >
            
        <ListGroup>
            {menuBodyRecent}
        </ListGroup>
        </List>
        </div>
        </>
    );
}