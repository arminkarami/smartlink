import React from 'react';
import FadeIn from '../fadeln/fadeln';
import {Row, Col, Form, Button, Breadcrumb} from 'react-bootstrap';
import './kontaktPost_Styles.css'

export default function ContactInfo(data1){
    return (
        <FadeIn>
            <section className="py-5 p-5 mt-5 mainsection">

                <h2 className="display-5 text-center mt-5">
                    <span className="text-p text_Color2">Feel Free to Contact Us!</span>
                </h2>
                <p className="lead text-center text-muted mb-5">
                    Do you have any questions about the product or would you like to get a general overview of our
                    products? Then please contact us via the channels provided. We look forward to your inquiry!
                </p>
                <Row className="g-4">
                    <Col md={6}>
                        <Row className="g-4">
                            {/* Address */}
                            <Col md={6}>
                                <div className="bg-p rounded p-4 border custom-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                         className="bi bi-geo-alt text_Color2" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <h2 className="mt-5 text_Color2">Address</h2>
                                    <div className="text-muted">{data1.data.data.data[0] !== undefined && data1.data.data.data[0].address} </div>
                                    <br/>

                                </div>
                            </Col>
                            {/* Call Us */}
                            <Col md={6}>
                                <div className="bg-p rounded p-4 border custom-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                         className="bi bi-telephone text_Color2" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    <h2 className="mt-5 text_Color2">Phone</h2>
                                    { data1.data.data.data[0]!==undefined && data1.data.data.data[0].phone.length > 0 && data1.data.data.data[0].phone.map(phone => (
                                        <div className="text-muted">{phone}</div>
                                        ))}
                                </div>
                            </Col>
                            {/* Open Hours */}
                            <Col md={6}>
                                <div className="bg-p rounded p-4 border custom-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                         className="text_Color2 bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                        <path
                                            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    <h2 className="mt-5 text_Color2">Opening Hours</h2>
                                    <div dangerouslySetInnerHTML={{ __html:data1.data.data.data[0]!==undefined && data1.data.data.data[0].openningHour }}></div>
                                    <br/>
                                </div>
                            </Col>
                            {/* Email Us */}
                            <Col md={6}>
                                <div className="bg-p rounded p-4 border custom-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                         className="text_Color2 bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                    <h2 className="mt-5 text_Color2">Email</h2>
                                    { data1.data.data.data[0]!==undefined && data1.data.data.data[0].email.length > 0 && data1.data.data.data[0].email.map(email => (
                                        <div className="text-muted">{email}</div>
                                    ))}
                                    <br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Form className="bg-p p-3 rounded border shadow-sm">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="contactFullname">Full Name</Form.Label>
                                <Form.Control type="text" id="contactFullname" placeholder="Ex: Armin Karami"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="contactEmail">Email address</Form.Label>
                                <Form.Control type="email" id="contactEmail" placeholder="name@example.com"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="contactComment">Your Message</Form.Label>
                                <Form.Control as="textarea" id="contactComment" rows={6}/>
                            </Form.Group>
                            <Button variant="primary" className={"w-100 mt-3"}
                                    style={{marginBottom: '35px'}}>Send</Button>
                            <br/><br/>
                        </Form>

                    </Col>
                </Row>

            </section>
        </FadeIn>

    )
}
