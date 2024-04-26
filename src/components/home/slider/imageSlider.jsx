import React from 'react';
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import Image from "react-bootstrap/Image";

export default function ImageSlider() {
    return (

        <Container className={"sliders d-flex justify-content-center align-items-center"}>
            <Carousel >
                <Carousel.Item>
                    <Row>
                        <Col md={6}>
                            <Image className="m-auto mt-5" src="https://timedoor.net/wp-content/uploads/2022/09/Mobile-Apps-Development-2.png"/>
                        </Col>
                        <Col md={6} className="m-auto py-5">
                            <h3 className="textSleider">Welcome to SmartLink!</h3>
                            <p className="textSleider">  Experience the future of guest service management with our cutting-edge app.
                                 From opening your hotel room door to contacting the hotel management, SmartStay puts convenience at your fingertips.
                                 Enjoy a seamless and personalized stay with us.,</p>

                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className={" px-5 align-items-center"}>
                    <Row>
                        <Col md={6} className="m-auto py-5">
                            <h3 className="textSleider">Step into a new era of hospitality with SmartLink!</h3>
                            <p className="textSleider">Discover the power of our smart guest service management app that revolutionizes your hotel
                                 experience. Unlock your room door with a simple tap,
                                and effortlessly connect with the hotel management for any assistance you need. Embrace a hassle-free stay with DoorLink.
                            </p>
                        </Col>

                        <Col md={6}>
                            <Image className="m-auto mt-5" src="https://www.digitalsilk.com/wp-content/uploads/2023/02/dashboard-design-hero-526x589.png.webp"/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className={" px-5 align-items-center"}>
                    <Row>
                        <Col md={6}>
                            <Image className="m-auto mt-5" src="https://lockin.com.my/wp-content/uploads/2021/09/x1-1-mb.png"/>
                        </Col>
                        <Col md={6} className="m-auto py-5">
                            <h3 className="textSleider">Discover the future of guest service with our innovative app!</h3>
                            <p className="textSleider">Say goodbye to traditional keycards and welcome a more intuitive way to access your room.
                                 Additionally, enjoy direct communication with our responsive hotel management team,
                                ensuring your needs are met promptly. Experience hospitality reimagined.
                            </p>
                        </Col>
                    </Row>
                </Carousel.Item>

            </Carousel>
        </Container>


    );
};

