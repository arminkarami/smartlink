import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FadeIn from '../fadeln/fadeln';
import './footer_Styles.css'

export default function Footer() {
    return (
        <FadeIn>
            <footer className="pt-5 pb-1 text-white bg_Fooder">
                <Container>
                    <Row className="py-4">
                        <Col md={3}>
                            <h2 className="mb-5 text_Color">SMARTLINK</h2>
                            <p className="text_Color text-start">Explore the future of hospitality with our cutting-edge management
                                system. Elevate your experience – where innovation meets seamless convenience.</p>
                            <div className="footer-social">
                                <ul className="list-unstyled mt-4  justify-content-around d-flex">
                                    <li className="me-3">
                                        <a href="tel:+43777777777" className="text-decoration-none text_Color">

                                            <span className="material-symbols-outlined">
call
</span>

                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href="mailto:test@smart-link.com" className="text-decoration-none text_Color">
                                           <span className="material-symbols-outlined">
mail
</span>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href="https://maps.google.com" className="text-decoration-none text_Color">
                                            <span className="material-symbols-outlined">
pin_drop
</span>
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
                                    <a href="src/components#" className="text-decoration-none text_Color">Privacy Policy</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h3 className="border-start border-4 ps-3 text_Color text-start"
                                style={{borderColor: 'var(--main-color_text)'}}>Address</h3>
                            <ul className="list-unstyled mt-4 ms-4">
                                <li>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.3004066634885!2d16.3563800766626!3d48.20082937125052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078ff2f1f949%3A0xa07ae2c454a3ad72!2sMariahilfer%20Str.%2019-21%2F2%203%2C%201060%20Wien!5e0!3m2!1sen!2sat!4v1706005472541!5m2!1sen!2sat"
                                        width="100%" height="150" style={{border: 0}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <a href="https://embedgooglemap.net/129/"></a>
                                </li>
                                <li className="text_Color">
                                    <i className="bi bi-geo-alt" style={{paddingRight: "10px"}}></i> Mariahilfestraße
                                    21/2/3, Wien 1070
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
