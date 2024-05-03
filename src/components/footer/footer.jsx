import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FadeIn from '../fadeln/fadeln';
import './footer_Styles.css'

export default function Footer(dataInfo) {
    return (
        <FadeIn>
            <footer className="pt-5 pb-1 text-white bg_Fooder">
                <Container>
                    <Row className="py-4">
                        <Col md={3}>

                            <h2 className="mb-5 text_Color">{dataInfo.data[0] !== undefined && dataInfo.data[0].name}</h2>
                            <p className="text_Color text-start">{dataInfo.data[0] !== undefined && dataInfo.data[0].description}</p>
                            <div className="footer-social">
                                <ul className="list-unstyled mt-4  justify-content-around d-flex">
                                    <li className="me-3">
                                        <a href={dataInfo.data[0] !== undefined && dataInfo.data[0].phone[0]} className="text-decoration-none text_Color">
                                            <span className="material-symbols-outlined">call</span>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href={dataInfo.data[0] !== undefined && dataInfo.data[0].email[0]}
                                           className="text-decoration-none text_Color">
                                            <span className="material-symbols-outlined">mail</span>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href="https://maps.google.com" className="text-decoration-none text_Color" >
                                            <span className="material-symbols-outlined">pin_drop</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} className="text_Color">
                            <h3 className="border-start border-4 ps-3 text_Color text-start">Site Map</h3>
                            <ul className="list-unstyled mt-4 text_Color text-start ms-4">
                                <li>
                                    <a href="home" className="text-decoration-none text_Color">Home</a>
                                </li>
                                <li>
                                    <a href="services" className="text-decoration-none text_Color">Services</a>
                                </li>
                                <li>
                                    <a href="price" className="text-decoration-none text_Color">Price</a>
                                </li>
                                <li>
                                    <a href="team" className="text-decoration-none text_Color">Team</a>
                                </li>
                                <li>
                                    <a href="contact" className="text-decoration-none text_Color">Contact</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h3 className="border-start border-4 ps-3 text_Color text-start">More</h3>
                            <ul className="list-unstyled mt-4 text-start ms-4">
                                <li>
                                    <a href="src/components#" className="text-decoration-none text_Color">Impression</a>
                                </li>
                                <li>
                                    <a href="src/components#" className="text-decoration-none text_Color">Privacy
                                        Policy</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h3 className="border-start border-4 ps-3 text_Color text-start"
                                style={{borderColor: 'var(--main-color_text)'}}>Address</h3>
                            <ul className="list-unstyled mt-4 ms-4">
                                <li dangerouslySetInnerHTML={{ __html:dataInfo.data[0]!==undefined && dataInfo.data[0].mapLocation }} >
                                </li>
                                <li className="text_Color">
                                    <i className="bi bi-geo-alt" style={{paddingRight: "10px"}}></i>
                                    {dataInfo.data[0] !== undefined && dataInfo.data[0].address}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr/>
                    <div className="text-center text_Color">© 2024 - All rights reserved
                    </div>
                </Container>
            </footer>
        </FadeIn>
    )
}
