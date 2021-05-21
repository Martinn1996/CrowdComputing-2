import Frame from "../Frame/Frame"
import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function Task4() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);

    if (finished) {
        //setCode(1) //TBD encode answer
        return (
            <Frame code={code} setCode={setCode}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>)
    }

    return (
        <Frame code={code} setCode={setCode}>
            <Col sm={12}>
                <h5>What are your thoughts on the Covid-19 vaccinations?</h5>
                <Form>
                    <Form.Group>
                        <Button onClick={() => { setFinished(true) }}>Neutral</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>Happy to get it!</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>I'm not going to get it!</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>Other</Button><span> </span>
                    </Form.Group>
                </Form>
            </Col>
        </Frame>);

    //Show plain questionnaire
}