import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import {Container, Row, Col, Card} from 'react-bootstrap';
import "./homePost_Styles.css";

export default function Features() {
    return (


        <FadeIn delay={0.4} direction="down">


            <Container id={"features"}>
                <h2 className=" text-center display-4 m-5  text_Color2">Features</h2>
                <p className="lead text-center text-muted ">
                    Experience seamless access with our intelligent door system and elevate guest interaction through
                    our innovative ticketing and chat features,
                    all in one user-friendly platform.
                </p>
                <Row className="g-4 pb-5">

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body className="front">
                                <span className="material-symbols-outlined">
meeting_room
</span>

                                <h5 className="card-title mb-2">Intelligent Door System</h5>
                                <p className="card-text lead text-muted">Effortlessly enter rooms using fingerprint
                                    technology or mobile devices.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body>
                                <span className="material-symbols-outlined">
support_agent
</span>
                                <h5 className="card-title mb-2">Ticketing System</h5>
                                <p className="card-text lead text-muted">Instantly resolve issues or make requests
                                    through our efficient ticketing system.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body>
                                <span className="material-symbols-outlined">
forum
</span>

                                <h5 className="card-title mb-2">Chat Function</h5>
                                <p className="card-text lead text-muted">Enhance communication within student dorms
                                    through our exclusive chat feature.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body>
                                <span className="material-symbols-outlined">
newspaper
</span>

                                <h5 className="card-title mb-2">News Updates for Guests</h5>
                                <p className="card-text lead text-muted">Stay informed about local events, news, and
                                    special offers directly through our platform.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body>
                                <span className="material-symbols-outlined">
dashboard
</span>
                                <h5 className="card-title mb-2">Manager Dashboard</h5>
                                <p className="card-text lead text-muted">Efficiently manage guests, tickets, and
                                    settings through a centralized manager dashboard.</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="text-center p-5 custom-shadow">
                            <Card.Body>
                                <span className="material-symbols-outlined">
verified_user
</span>
                                <h5 className="card-title mb-2">Secure Guest Registration:</h5>
                                <p className="card-text lead text-muted">Ensure a secure and seamless check-in process
                                    by registering guests with their phone numbers.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </FadeIn>


    )
}

