import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import {Container, Row, Col, Card} from 'react-bootstrap';
import "./homePost_Styles.css";
import {getFeatures} from "../../api/GetFeatures";

export default function Features() {
    const [features, setFeatures] = useState([])
    const fetchFeaturData = async () => {
        const features = await getFeatures()
        setFeatures([...features])
    }

    useEffect(() => {
        fetchFeaturData()
    }, []);

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
                    {features.length > 0 && features.map(featur => (
                        <Col xl={4} md={6}>
                            <Card className="text-center p-5 custom-shadow">
                                <Card.Body className="front">
                                    <span className="material-symbols-outlined">{featur.icon}</span>
                                    <h5 className="card-title mb-2">{featur.title}</h5>
                                    <p className="card-text lead text-muted">{featur.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </FadeIn>
    )
}

