import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import './services_Style.css'
import {Carousel, Row, Col} from 'react-bootstrap';
import {FaDoorOpen} from 'react-icons/fa';
import {MdAppShortcut} from "react-icons/md";
import {IoMdChatboxes} from "react-icons/io";
import {FaPeopleGroup} from "react-icons/fa6";


export default function ClientAppService() {
    return (
        <FadeIn delay={0.2} direction="up">
            <section className="mainsection mt-5" style={{paddingTop: "50px"}}>
                <div style={{textAlign: "center", paddingTop: "30px"}}>
                    <h2>Our popular products for all your Hotel/Dorm needs</h2>
                    <p>Use the solutions individually or in combination to get started with digitalization.</p>
                </div>
                <Row className="align-items-center post">
                    <Col md={6}>
                        <h4>IOS and Android App for your guests</h4>
                        <h5>Unlock Unmatched Comfort and Connectivity.</h5>
                        <p className="lead text-muted mb-4 mt-3">
                            Indulge in a seamless guest experience with our Client App. Effortlessly reserve your stay,
                            unlock doors with cutting-edge technology, and foster connections through exclusive chat
                            features. Elevate your stay – where convenience meets community.

                            <Row className="row-cols-auto mt-5">
                                <Col className="divIcon">
                                    <FaDoorOpen />
                                    <span>Secure Door Access</span>
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <MdAppShortcut />
                                    </span>
                                    Intuitive Interface
                                </Col>

                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <IoMdChatboxes />
                                    </span>
                                    Exclusive Chat
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                     <FaPeopleGroup />
                                    </span>
                                    Guest Convenience
                                </Col>
                            </Row>
                        </p>

                    </Col>
                    <Col md={6} className="m-auto">
                        <Carousel>
                            <Carousel.Item>
                                <img src="https://firebasestorage.googleapis.com/v0/b/smartlink-pro.appspot.com/o/booking.png?alt=media&token=ba83e84e-d9f1-4876-a56a-81e583683859" className="img-fluid w-100"
                                     alt="Smart Home"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </section>
        </FadeIn>
    )
}
