import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import './services_Style.css'
import {Carousel, Row, Col} from 'react-bootstrap';
import {MdOutlineManageAccounts, MdOutlineSettingsSuggest} from "react-icons/md";
import {BsPersonGear} from "react-icons/bs";
import {RiQuestionnaireFill} from "react-icons/ri";
import {CiMobile1} from "react-icons/ci";

export default function ManagerAppService() {
    return (
        <FadeIn delay={0.2} direction="down">
            <section className="" style={{paddingTop: "50px", backgroundColor: "var(--main_post-color)"}}>
                <Row className="align-items-center post mainsection">
                    <Col md={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/smartlink-pro.appspot.com/o/dashboard.png?alt=media&token=a947f5b9-30b0-42e5-956d-10ca71745024"
                                    className="img-fluid" alt="Smart Home"/>
                            </Carousel.Item>
                            {/*   <Carousel.Item>
                                <img src="/img/16520429_hc-appliances-order-and-shopping-1500x1500.webp" className="img-fluid" alt="Smart Home" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/img/smart-home-g3daf1aa4b_1920.jpg" className="img-fluid" alt="Smart Home" />
                            </Carousel.Item>*/}
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h4>Full Control Management App</h4>
                        <h5>Access Elevated: Security Meets Convenience.</h5>
                        <p className="lead text-muted mb-4 mt-3">
                            Take charge with our Manager App – a central hub for efficient control. Seamlessly add
                            guests, manage tickets, and tailor settings with ease. Streamline operations, enhance guest
                            satisfaction, and redefine management efficiency effortlessly.
                            <Row className="row-cols-auto mt-4">
                                <Col className="divIcon">
                                    <MdOutlineManageAccounts />
                                    <span>Efficient Management</span>
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <BsPersonGear />
                                    </span>
                                    Guest Control
                                </Col>

                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                     <RiQuestionnaireFill />
                                    </span>
                                    Ticketing System
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <MdOutlineSettingsSuggest />
                                    </span>
                                    Customization
                                </Col>
                                <Col className="divIcon">
                                    <span className="postIconWrapper">
                                      <CiMobile1 />
                                    </span>
                                    User-Friendly Interface
                                </Col>
                            </Row>
                        </p>
                    </Col>
                </Row>
            </section>
        </FadeIn>
    )
}

