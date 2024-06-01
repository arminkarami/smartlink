import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import './services_Style.css'
import {Carousel, Row, Col} from 'react-bootstrap';
import {getServicesPosts} from "../../api/GetServicesPosts";

export default function ServicePosts() {
    const [servicesPosts, setServicesPosts] = useState([])
    const fetchServicesPostsData = async () => {
        const servicesposts = await getServicesPosts()
        setServicesPosts([...servicesposts])
    }
    useEffect(() => {
        fetchServicesPostsData()
    }, []);

    return (
        <>
            {servicesPosts.length > 0 && servicesPosts.map(service => (
                <FadeIn delay={0.2} direction="down">
                    <section className="" style={{
                        paddingTop: "60px",
                        backgroundColor: (service.index % 2 === 0) ? "var(--main_post-color)" : "var(--main_apost-color)"
                    }}>
                        <Row className="align-items-center post mainsection m-auto justify-content-center">
                            {(service.index % 2 === 1) &&
                                <Col md={5}>


                                            <img
                                                src={service.img}
                                                className="me-3 img-fluid rounded shadow w-100" alt="Smart Home"/>


                                </Col>}
                                <Col md={5}>
                                <h4>{service.title}</h4>
                                <h5>{service.subtitle}</h5>
                                <p className="lead text-muted mb-4 mt-3">{service.description}</p>

                                <Row className="row-cols-auto mt-4">
                                    {service.features.length > 0 && service.features.map(feature => (
                                        <Col className="divIcon">
                                            <span dangerouslySetInnerHTML={{__html: feature.icon}}/>
                                            <span>{feature.title}</span>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            {(service.index % 2 === 0) &&
                                <Col md={5}>
                                            <img
                                                src={service.img}
                                                className=" m-2 img-fluid rounded shadow w-100" alt="Smart Home"/>
                                </Col>}
                        </Row>
                    </section>
                </FadeIn>
            ))}
        </>
    )

}

