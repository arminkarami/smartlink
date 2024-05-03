import React, {useEffect, useState} from 'react'
import FadeIn from '../fadeln/fadeln'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {getPreis} from "../../api/GetPreis";

export default function PricePage() {
    const [preise, setPreise] = useState([])
    const fetchPreisData = async () => {
        const preise = await getPreis()
        setPreise([...preise])
    }

    useEffect(() => {
        fetchPreisData()
    }, []);

    return (
        <FadeIn>
            <section className="bg-light mt-5 py-5">
                <Container className="p-4 " style={{borderColor: 'var(--bg-color)'}}>
                    <div className="text-center">
                        <h2 className="text-p">Pricing Plans</h2>
                        <p className="lead text-muted">Choose the Perfect Package for Your Hospitality Needs</p>
                    </div>
                    <Row className="my-5 align-items-center justify-content-center w-100">
                        {preise.length > 0 && preise.map(p => (
                            <Col xs={p.mostLike ? 8 : 9} lg={4} xl={4}>
                                {p.mostLike && (
                                    <Card.Header className="text-center text-p">Am beliebtesten</Card.Header>
                                )}
                                <Card border={p.mostLike ? "2" : "0"}
                                      style={{borderColor: p.mostLike ? 'var(--main-color_2)' : null}}>
                                    <Card.Body className="text-center py-4">
                                        <h4 className="card-title">{p.title}</h4>
                                        <p className="lead card-subtitle">{p.subtitle}</p>
                                        <p className="display-5 my-4 text-p fw-bold">{p.price}</p>
                                        <p className="card-text px-5 text-muted d-none d-lg-block">{p.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </FadeIn>
    )
}