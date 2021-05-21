import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Col, Button, Form} from "react-bootstrap";

export default function Task2() {
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
                <h5>Whilst you're waiting, why not do something productive?</h5>
                    <p>Could you identify what you see in the image below?</p>
                </Col>
                <Col sm={12}>
                <Image src={process.env.PUBLIC_URL + "/images/dog.jpeg"} width="400p" style={{marginBottom: "25px"}}></Image>
                <Form>
                    <Form.Group>
                        <Button onClick={() => { setFinished(true) }}>Ball</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>Boat</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>Car</Button><span> </span>
                        <Button onClick={() => { setFinished(true) }}>Dog</Button><span> </span>
                    </Form.Group>
                </Form>
                
            </Col>
        </Frame>);
}