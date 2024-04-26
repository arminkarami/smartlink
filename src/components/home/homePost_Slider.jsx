import {Carousel} from "react-responsive-carousel";
import {Col, Container, Row} from "react-bootstrap";
import FadeIn from "../fadeln/fadeln";
import VideoCover from "react-video-cover";
import "./homePost_Styles.css";

export default function HomePost_Slider(){
    const videoOptions = {
        src: '/img/videoplayback.mp4',
        autoPlay: true,
        loop: true,
        muted: true,

    }
    return(

        <Container className="menu-container" >
            <VideoCover videoOptions={videoOptions} className="video-cover"/>
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    className="carousel"
                    autoPlay={true}
                    interval={3000}
                >

                    <div>
                        <Row className="">

                            <Col md={6}>
                                <FadeIn delay={0.2} direction="down">
                                    <h2 className="display-4 mb-4">Wie <span className="text_Color">funktioniert</span> es?</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut blanditiis illo quaerat autem quasi ut
                                        sapiente. Molestias magni explicabo tempora a, tenetur suscipit dolorum rem alias ipsam perferendis autem.
                                    </p>
                                    <div>
                                        {/*<Button variant="primary">Get Started</Button>*/}
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col md={6}>
                                <FadeIn delay={0.10} direction="up">
                                    <img src="/img/Smart home-amico.png" className="img-fluid" alt="Smart Home" />
                                </FadeIn>
                            </Col>

                        </Row>
                    </div>
                    <div className="textSleider">
                        <Row>
                            <Col md={6}>
                                <FadeIn delay={0.10} direction="up">
                                    <img src="/img/New%20entries-amico.png" className="img-fluid" alt="Smart Home" />
                                </FadeIn>
                            </Col>
                            <Col md={6}>
                                <FadeIn delay={0.2} direction="down">
                                    <h2>Wie <span>funktioniert</span> es?</h2>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut blanditiis illo quaerat autem quasi ut
                                        sapiente. Molestias magni explicabo tempora a, tenetur suscipit dolorum rem alias ipsam perferendis autem.
                                    </p>
                                    <div>
                                        {/*<Button>Get Started</Button>*/}
                                    </div>
                                </FadeIn>
                            </Col>
                        </Row>
                    </div>

                </Carousel>
        </Container>

    )

}