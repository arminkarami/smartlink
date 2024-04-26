import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from '../fadeln/fadeln';
import { Row, Col, Button } from 'react-bootstrap';


export default function HowItWorks() {
  return (
   <FadeIn delay={0.2} direction="down">
      <section className="" style={{backgroundColor:"var(--main_post-color)"}} >
        <Row className="align-items-center mainsection m-auto">
          <Col md={6}>
            <h2 className="display-4 mb-4">How it <span className="text_Color2">works</span>?</h2>
            <p className="lead  mb-4 font-weight-bold text-start">
              Simply sign in with your Gmail account for guests or use phone number, username, and password for managers.
              Enjoy seamless functionality, including fingerprint door access, ticket submission, and exclusive chat features for student dorms.
              Managers can easily add guests, handle tickets, and customize settings.
              Explore the future of efficient hotel and dorm management with our user-friendly platform.
            </p>
            <div className="text-center text-md-start mt-5">
              <Button href="/services" variant="primary">Get Started</Button>
            </div>
          </Col>
          <Col md={6}>
            <img src="/img/Smart home-amico.png" className="img-fluid" alt="Smart Home" />
          </Col>
        </Row>
      </section>
   </FadeIn>
  )
}

