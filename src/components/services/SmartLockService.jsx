import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import './services_Style.css'
import {Carousel, Row, Col} from 'react-bootstrap';
import {IoFingerPrintSharp} from "react-icons/io5";
import {MdOutlineAppShortcut, MdOutlineSecurity} from "react-icons/md";
import {GrTechnology} from "react-icons/gr";
import {HiEmojiHappy} from "react-icons/hi";


export default function SmartLockService() {
    return (
        <FadeIn delay={0.2} direction="down">
            <section className="mainsection" style={{paddingTop: "50px"}}>
                <Row className="align-items-center post">
                    <Col md={6}>
                        <h4>Feel a new level of Security with our new Smart Lock</h4>
                        <h5>Access Elevated: Security Meets Convenience.</h5>
                        <p className="lead text-muted mb-4 mt-3">
                            Step into the future with our Door Opener. Securely open doors using fingerprints or mobile
                            devices, enhancing security and guest convenience. Immerse yourself in the seamless blend of
                            innovation and access control.
                            <Row className="row-cols-auto">
                                <Col className="divIcon">
                                    <IoFingerPrintSharp/>
                                    <span>Fingerprint Access</span>
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <MdOutlineAppShortcut/>
                                    </span>
                                    Mobile Integration
                                </Col>

                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <MdOutlineSecurity/>
                                    </span>
                                    Advanced Security
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <HiEmojiHappy/>
                                    </span>
                                    Seamless Convenience
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                     <GrTechnology/>
                                    </span>
                                    Innovative Technology
                                </Col>
                            </Row>
                        </p>
                    </Col>
                    <Col md={6}>
                        <Carousel>
                            {/*  <Carousel.Item>
                                <img src="/img/Smart home-amico.png" className="img-fluid" alt="Smart Home"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/img/1_RJWVvBui8_UkSX0C2v9X6Q.png" className="img-fluid" alt="Smart Home"/>
                            </Carousel.Item>*/}
                            <Carousel.Item>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/smartlink-pro.appspot.com/o/door-lock.png?alt=media&token=438ed2d8-aa12-476f-b6e1-dae05190addb"
                                    className="img-fluid" alt="Smart Home"/>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                </Row>
            </section>
        </FadeIn>
    )
}

