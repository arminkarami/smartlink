import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import { Row, Col, Button } from 'react-bootstrap';
import {getPosts} from "../../api/GetPost";


export default function HowItWorks(data) {


  return (
   <FadeIn delay={0.2} direction="down">
      <section className="" style={{backgroundColor:"var(--main_post-color)"}} >
            <Row className="align-items-center mainsection m-auto">
              <Col md={6}>
                <h2 className="display-4 mb-4" dangerouslySetInnerHTML={{ __html:data.data.title }}></h2>
                <p className="lead  mb-4 font-weight-bold text-start">
                  {data.data.description}
                </p>
                <div className="text-center text-md-start mt-5">
                  <Button href="/services" variant="primary">Get Started</Button>
                </div>
              </Col>
              <Col md={6}>
                <img src={data.data.img} className="img-fluid" alt="Smart Home" />
              </Col>
            </Row>
      </section>
   </FadeIn>
  )
}

