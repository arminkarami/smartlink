import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import {Image, Row, Col, Button} from 'react-bootstrap';

export default function IntroduceApp() {
    return (
        <FadeIn delay={0.2} direction="down">
            <section style={{backgroundColor: "var(--main_post-color)"}}>
                <div className="mainsection py-5" style={{textAlign: "center"}}>
                    <Row>
                        <Col md={6}>
                            <h2 className="display-4 mt-4">Control
                                <samp className="text_Color2"> Every think</samp> in your hand!
                            </h2>
                            <p className={"text-start"}>
                                Unlock a new era of convenience with our cutting-edge app! Seamlessly manage
                                reservations, enjoy secure door access with fingerprint technology, and resolve requests
                                effortlessly with our intuitive ticketing system. Elevate community engagement in
                                student dorms with our exclusive chat feature. Stay informed with local updates and
                                customize your experience. Experience efficiency and innovation – all in the palm of
                                your hand!
                            </p>
                            <div className="text-center text-md-start">
                                <Button href="services" variant="primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    Read more
                                </Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Image src="img/21154055_Home_Connect_evon_Screen_Phone_2_aA.webp" alt="phone image"
                                 className=" img-fluid rounded shadow w-100"/>
                        </Col>
                    </Row>
                </div>
            </section>
        </FadeIn>
    )
}