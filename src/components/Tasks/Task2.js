import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Col, Button, Form } from "react-bootstrap";

export default function Task2() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);

    if (finished) {
        return (
            <Frame code={code}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>)
    }

    const taskSubmitted = () => {
        setFinished(true);
        setCode(1)
    }

    return (
        <Frame code={code}>
            <Col sm={12}>
                <h5>Whilst you're waiting, why not do something productive?</h5>
                <p>Could you identify what you see in the image below?</p>
            </Col>
            <Col sm={4}>
                <Image src={process.env.PUBLIC_URL + "/images/dog.jpeg"} width="100%" style={{ marginBottom: "25px" }}></Image>
                <Form>
                    <Form.Group>
                        <Button onClick={taskSubmitted}>Ball</Button><span> </span>
                        <Button onClick={taskSubmitted}>Boat</Button><span> </span>
                        <Button onClick={taskSubmitted}>Car</Button><span> </span>
                        <Button onClick={taskSubmitted}>Dog</Button><span> </span>
                    </Form.Group>
                </Form>
            </Col>
        </Frame>);
}