import React, {useEffect, useState} from 'react';
import {Carousel, Col, Container, Row} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import {getSlider} from "../../../api/GetSliders";

export default function ImageSlider() {
    const [sliders, setSliders] = useState([])
    const fetchSliderData = async () => {
        const sliders = await getSlider()
        setSliders([...sliders])
    }
    useEffect(() => {
        fetchSliderData()
    }, []);


    return (
        <Container className={"sliders d-flex justify-content-center align-items-center"}>
            <Carousel>
                {sliders.length > 0 && sliders.map(slider => (
                    <Carousel.Item>
                        <Row>
                            {(slider.index % 2 === 0) &&
                                <Col md={6}>
                                    <Image className="m-auto mt-5" src={slider.img}/>
                                </Col>
                            }
                            <Col md={6} className="m-auto py-5">
                                <h3 className="textSleider">{slider.title}</h3>
                                <p className="textSleider">{slider.description}</p>
                            </Col>
                            {(slider.index % 2 === 1) &&
                                <Col md={6}>
                                    <Image className="m-auto mt-5" src={slider.img}/>
                                </Col>
                            }
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

