import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import * as React from 'react';

//import { FixedSizeList } from 'react-window';

import List from '@mui/material/List';

import { ListGroup } from "react-bootstrap";


export default function Notifications() {
    const [menuBody, setMenuBody] = useState([]);
    
    const [menu, setMenu] = useState(true);
    const [menuRecent, setMenuRecent] = useState(true);
    const [user, setUser] = useContext(userContext);
    const url = "https://overflowingstacks.azurewebsites.net";
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
            const response = await fetch(`${url}`+ "/notification");
            const menus = await response.json();
            console.log(menus);
            const menuTableRows = menus.map((e) => {
                if (e.user.email === user.username){
                    const message=e.noti_con //TODO: what we are pulling
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
        
        </>
    );
}