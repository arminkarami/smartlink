import React, {useEffect, useState} from "react";
import './navBarStyle.css';
import {Nav, Navbar} from "react-bootstrap";

export default function NavBar(dataWebSiteInfo) {
    /*console.log(data.data.data.data[0].name)*/
    const[opacity, setOpacity] = useState(0);
    const[border, setBorder] = useState(0);
    const[blackColor, setBlackColor] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY>400){
                setBorder(4)
            }else{
                setBorder(window.scrollY/100)
            }
            if(window.scrollY>100){
                setOpacity(1)
            }else{
                setOpacity(window.scrollY/100)
            }
            if(window.scrollY > 20){
                setBlackColor(true)
            }else{
                setBlackColor(false)
            }
        })
    }, []);

    return (
        <header id="header" className={blackColor && "blackColor" } style={{
            background: "rgba(255,255,255," + opacity + ")",
            borderBottom: border + "px solid var(--primary-color)",
        }}>
            <Navbar className='navbar' expand="lg"
                    style={{padding: "10px", fontWeight: "bold"}}>
                <Navbar.Brand href="https://smartlink-pro.web.app/">
                    <img
                        // src={{ __html:dataWebSiteInfo.data.data.data[0]!==undefined && dataWebSiteInfo.data.data.data[0].logo }}
                        src="https://firebasestorage.googleapis.com/v0/b/smartlink-pro.appspot.com/o/website%2FArtboard%201black.png?alt=media&token=4b93f411-71db-4867-a7b7-d76b1e61c16b"
                        width="50"
                        height="50"
                        className="d-inline-block align-top "
                        alt="Ashna logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle style={{marginRight: "10px"}} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="nav justify-content">
                        <Nav.Link className='nav-link' href="/">Home</Nav.Link>
                        <Nav.Link className='nav-link'
                                  href="/services">Services</Nav.Link>
                        <Nav.Link className='nav-link' href="/price">Price</Nav.Link>
                        <Nav.Link className='nav-link' href="/team">Team</Nav.Link>
                        <Nav.Link className= 'nav-link'
                                  href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
