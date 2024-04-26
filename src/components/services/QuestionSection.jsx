import React from 'react';
import FadeIn from '../fadeln/fadeln';
import Accordion from 'react-bootstrap/Accordion';

export default function QuestionSection() {
    return (
        <FadeIn delay={0.2} direction="down">
            <section className="py-4 bg-p mainsection">
                <div className="container2">
                    <h2 className="display-5 text-center mt-5 ma"><samp className="text-p">Frequently</samp> Asked
                        Questions (FAQ)</h2>
                    <p className="lead text-center text-muted mb-5">
                        Your Queries, Our Solutions
                    </p>

                    <Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How does the intelligent door system work?</Accordion.Header>
                            <Accordion.Body>
                                Our
                                <strong>
                                    &nbsp; intelligent&nbsp;</strong>
                                door system utilizes cutting-edge technology, allowing guests to access their rooms
                                securely through fingerprint recognition or mobile devices.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What features does the Client App offer</Accordion.Header>
                            <Accordion.Body>
                                The Client App empowers guests with
                                <strong>
                                    &nbsp; secure door access, and
                                    exclusive chat features, creating a personalized and connected stay&nbsp;
                                </strong>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How does the Manager App streamline hotel operations?</Accordion.Header>
                            <Accordion.Body>
                                The Manager App serves as a centralized
                                <strong>&nbsp;control hub, enabling efficient guest
                                    management, ticket handling, and customization of settings &nbsp;</strong>
                                for optimal operational
                                efficiency.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header> What sets our Door Opener apart from traditional locks?</Accordion.Header>
                            <Accordion.Body>
                                Our Door Opener integrates
                                <strong>&nbsp;advanced technology</strong>
                                , allowing guests to open doors securely using fingerprints or mobile devices, enhancing both security and convenience.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header> How user-friendly is your app interface?</Accordion.Header>
                            <Accordion.Body>
                                Our apps boast a
                                <strong>&nbsp;clean, intuitive design&nbsp;</strong>
                                for easy navigation. We prioritize user-friendliness to ensure a seamless and enjoyable experience for our users.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </section>
        </FadeIn>
    )
}

