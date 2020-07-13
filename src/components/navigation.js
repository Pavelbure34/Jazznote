import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = ()=>{

    const {Toggle, Collapse} = Navbar;
    const {Link} = Nav;
    return (
        <Navbar fixed="top" expand="sm">
            <Container>
                <Toggle id="basic-navbar-nav-toggle" aria-controls="basic-navbar-nav"/>
                <Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/reviews">
                            Monthly Album Review
                        </NavLink>
                        <NavLink className="nav-link" to="/events">
                            Events
                        </NavLink>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export {Navigation};
