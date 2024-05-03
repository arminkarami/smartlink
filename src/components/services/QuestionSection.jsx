import React, {useEffect, useState} from 'react';
import FadeIn from '../fadeln/fadeln';
import Accordion from 'react-bootstrap/Accordion';
import {getQuestion} from "../../api/GetQuestion";

export default function QuestionSection() {
    const [questions, setQuestions] = useState([])
    const fetchQuestionData = async () => {
        const questions = await getQuestion()
        setQuestions([...questions])
    }
    useEffect(() => {
        fetchQuestionData()
    }, []);


    return (
        <FadeIn delay={0.2} direction="down">
            <section className="py-4 bg-p mainsection">
                <div className="container2">
                    <h2 className="display-5 text-center mt-5 ma"><samp className="text-p">Frequently</samp> Asked
                        Questions (FAQ)</h2>
                    <p className="lead text-center text-muted mb-5">
                        Your Queries, Our Solutions
                    </p>
                    <Accordion>
                        {questions.length > 0 && questions.map(question => (
                            <Accordion.Item eventKey={question.id}>
                                <Accordion.Header>{question.question}</Accordion.Header>
                               <Accordion.Body dangerouslySetInnerHTML={{__html: question.answer}}></Accordion.Body>
                            </Accordion.Item>
                            ))}
                    </Accordion>
                </div>
            </section>
        </FadeIn>
    )
}

