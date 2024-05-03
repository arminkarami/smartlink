import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import {Image, Row, Col, Button} from 'react-bootstrap';

export default function Posts(data) {
    console.log(data)
    return (
        <>
            {
                data.data.length > 0 && data.data.map(post => (
                        <FadeIn delay={0.2} direction="down">
                            <section
                                style={{backgroundColor: (post.index % 2 === 1) ? "var(--main_post-color)" : "var(--main_apost-color)"}}>
                                <div className="mainsection py-5" style={{textAlign: "center"}}>
                                    <Row>
                                        {(post.index % 2 === 1) &&
                                            <Col md={6}>
                                                <Image src={post.img} alt="phone image"
                                                       className=" img-fluid rounded shadow w-100"/>
                                            </Col>
                                        }
                                        <Col md={6}>
                                            <h2 className="display-4 mt-4" dangerouslySetInnerHTML={{__html: post.title}}>
                                            </h2>
                                            <p className={"text-start"}>
                                                {post.description}
                                            </p>
                                            <div className="text-center text-md-start">
                                                <Button href="services" variant="primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor"
                                                         viewBox="0 0 16 16">
                                                        <path fillRule="evenodd"
                                                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                    </svg>
                                                    Read more
                                                </Button>
                                            </div>
                                        </Col>
                                        {(post.index % 2 === 0) &&
                                            <Col md={6}>
                                                <Image src={post.img} alt="phone image"
                                                       className=" img-fluid rounded shadow w-100"/>
                                            </Col>
                                        }
                                    </Row>
                                </div>
                            </section>
                        </FadeIn>
                    )
                )
            }
        </>
    )

}
