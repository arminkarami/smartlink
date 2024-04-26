import React from 'react'
import FadeIn from '../fadeln/fadeln'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

export default function PricePage() {
    return (
        <FadeIn>
            <section className="bg-light mt-5 py-5">
                <Container className="p-4 " style={{borderColor: 'var(--bg-color)'}}>
                    <div className="text-center">
                        <h2 className="text-p">Pricing Plans</h2>
                        <p className="lead text-muted">Choose the Perfect Package for Your Hospitality Needs</p>
                    </div>

                    <Row className="my-5 align-items-center justify-content-center w-100">
                        <Col xs={8} lg={4} xl={4}>
                            <Card border="0">
                                <Card.Body className="text-center py-4">
                                    <h4 className="card-title">Standard Package</h4>
                                    <p className="lead card-subtitle">Unlock the Essentials</p>
                                    <p className="display-5 my-4 text-p fw-bold">$99/month</p>
                                    <p className="card-text px-5 text-muted d-none d-lg-block">
                                        Experience the core features of our intelligent hotel and dorm management
                                        system. Enjoy secure door access, seamless reservations, and efficient guest
                                        communication. Ideal for establishments seeking essential functionalities to
                                        elevate guest satisfaction.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={9} lg={4} xl={4}>
                            <Card border="2" style={{borderColor: 'var(--main-color_2)'}}>
                                <Card.Header className="text-center text-p">Am beliebtesten</Card.Header>
                                <Card.Body className="text-center py-5">
                                    <h4 className="card-title">Premium Package</h4>
                                    <p className="lead card-subtitle">Elevated Comfort and Control</p>
                                    <p className="display-5 my-4 text-p fw-bold">$149/month</p>
                                    <p className="card-text px-5 text-muted d-none d-lg-block">
                                        Take your hospitality management to the next level with our Premium Package.
                                        Seamlessly manage reservations, tickets, and settings with the Manager App.
                                        Guests enjoy enhanced access features and exclusive chat capabilities. Elevate
                                        both guest experience and operational efficiency.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={8} lg={4} xl={4}>
                            <Card border="0">
                                <Card.Body className="text-center py-4">
                                    <h4 className="card-title">Executive Package</h4>
                                    <p className="lead card-subtitle">The Ultimate Hospitality Experience</p>
                                    <p className="display-5 my-4 text-p fw-bold">$249/month</p>
                                    <p className="card-text px-5 text-muted d-none d-lg-block">
                                        Indulge in the pinnacle of hospitality innovation. Our Executive Package offers
                                        an all-encompassing solution, combining advanced door access, comprehensive
                                        management tools, and personalized guest services. Redefine luxury, security,
                                        and efficiency in one exclusive package.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </FadeIn>
    )
}

