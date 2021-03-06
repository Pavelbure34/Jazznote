import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

/*
    navigation.js -> Top Navigation bar based on React-bootstrap component.
*/

const Navigation = ()=>{

    const {Toggle, Collapse} = Navbar;
    return (
        <Navbar fixed="top" expand="xl">
            <Toggle id="basic-navbar-nav-toggle" aria-controls="basic-navbar-nav"/>
            <Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Toggle id="basic-navbar-nav-toggle" aria-controls="basic-navbar-nav"/>
                    <NavLink className="nav-link" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/reviews">
                        Monthly Album Review
                    </NavLink>
                    <a className="nav-link" href="#contacts">
                        Contacts
                    </a>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export {Navigation};
