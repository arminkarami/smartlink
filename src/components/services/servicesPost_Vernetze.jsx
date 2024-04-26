import React from 'react';
import FadeIn from '../fadeln/fadeln';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesPost_Vernetze = () => {
  return (
<FadeIn delay={0.2} direction="down">
<section>
      <Container>
        <h2 className="display-5 text-center mt-5">Vernetze deinen Haushalt intelligent</h2>
        <p className="lead text-center text-muted mb-5">
          Lorem, ipsum dolor solore a repellat deserunt nesciunt fuga obcaecati incidunt maiores. Quam laborum aliquam
          ullam accusamus eveniet vitae deserunt quia voluptatem molestias.
        </p>
        <Row>
          <Col lg={4}>
            <Card className="mb-3 custom-shadow">
              <Card.Img src="img/16520440_hc-appliances-pairingfinder-teaser-1500x1500.webp" alt="..." />
              <Card.Body>
                <Card.Title className="mb-4">Verbinde dein Hausgerät</Card.Title>
                <Card.Text>
                  Einmal verknüpfen, sofort loslegen: Der Connection Guide hilft dir in wenigen Schritten den richtigen QR-Code für dein Hausgerät zu finden und so den Verbindungs-Prozess zu starten.
                </Card.Text>
                <a href="#" className="card-text fs-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  Read more
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="mb-3 custom-shadow">
              <Card.Img src="img/16520429_hc-appliances-order-and-shopping-1500x1500.webp" alt="..." />
              <Card.Body>
                <Card.Title className="mb-4">Home Connect Partner</Card.Title>
                <Card.Text>
                  Home Connect kannst du mit zahlreichen digitalen Services und Systemen verbinden. Entdecke hier alle Partner und lass dich inspirieren, wie du dein Zuhause noch smarter gestalten kannst.
                </Card.Text>
                <a href="#" className="card-text fs-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  Read more
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="mb-3 custom-shadow">
              <Card.Img src="img/iot-g5c9605398_1920.jpg" alt="..." />
              <Card.Body>
                <Card.Title className="mb-4">Fernstart: So funktioniert es</Card.Title>
                <Card.Text>
                  Der Fernstart ist eine praktische Funktion, dank der Hausgeräte mit Home Connect aus der Ferne gestartet werden können – was nützlich sein kann, wenn du deinen Backofen vorheizen oder die Waschmaschine...
                </Card.Text>
                <a href="#" className="card-text fs-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  Read more
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
</FadeIn>
  )
}

export default ServicesPost_Vernetze