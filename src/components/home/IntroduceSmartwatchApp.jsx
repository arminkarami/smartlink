import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import FadeIn from '../fadeln/fadeln'


export default function IntroduceSmartwatchApp() {
    return (
        <FadeIn delay={0.2} direction="down">

            <div className="mainsection py-5">

                <Row>
                    <Col md={6}>
                        <Image src="img/istockphoto-665701898-170667a.jpg" className=" img-fluid rounded shadow  w-100"/>
                    </Col>
                    <Col md={6} style={{paddingTop: "20px", textAlign: "left"}}>
                        <h2 className="display-4 mb-4 ">Unveiling our upcoming feature – <span
                            className="text_Color2 ">the Smart Watch App!</span></h2>
                        <p className={"text-start"}>
                            Seamlessly unlock doors with a simple glance at your wrist. Experience unparalleled
                            convenience as our cutting-edge technology integrates with your smart watch, providing
                            secure and effortless door access. Elevate your stay with the future of hospitality at
                            your fingertips. Stay tuned for a new era of accessibility and innovation!
                        </p>
                        <Button href="services" variant="primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            Read more
                        </Button>
                    </Col>

                </Row>
            </div>

        </FadeIn>
    )
}