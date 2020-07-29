import React from 'react';
import {Nav} from 'react-bootstrap';
import {Icon} from '.';
import {
    faInstagram,
    faTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

/*
    footer.js : Footer of the page
*/

const Footer = ()=>{
    const {Item, Link} = Nav;
    return (
        <Nav id="contacts" className="justify-content-center">
            <Item>
                <Link href="https://www.linkedin.com/in/dongbin-alistaire-suh-90350ba8/">
                    <Icon icon={faLinkedin} size="1x" color="#0072b1"/>
                </Link>
            </Item>
            <Item>
                <Link href="https://www.instagram.com/alistairesuh/">
                    <Icon icon={faInstagram} size="1x" color="#FD1D1D"/>
                </Link>
            </Item>
            <Item>
                <Link href="https://twitter.com/Suh_34">
                    <Icon icon={faTwitter} size="1x" color="#1DA1F2"/>
                </Link>
            </Item>
        </Nav>
    );
};

export {Footer};
