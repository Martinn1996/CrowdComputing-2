import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Form, Col, Button, InputGroup} from "react-bootstrap";

export default function Task1() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    if (finished) {
        return (
            <Frame code={code}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>)
    }

    const taskSubmitted = () => {
        answer.trim().length > 0 ? setFinished(true) : setSubmitted(true);
        setCode(1);
    }

    return (
        <Frame code={code}>
            <Col sm={12}>
                <h5>Whilst you're waiting, why not do something productive?</h5>
                <p>Could you identify what you see in the image below?</p>
            </Col>
            <Col sm={4}>
                <Image src={process.env.PUBLIC_URL + "/images/dog.jpeg"} width="100%" style={{marginBottom: "25px"}}></Image>
                <Form>
                    <InputGroup size="sm" className="mb-3" hasValidation>
                        <Form.Control type="text" aria-describedby="inputGroup-sizing-sm" name="answer" value={answer} onChange={ e => setAnswer(e.target.value)} isInvalid={submitted && answer.trim().length === 0}/>
                        <InputGroup.Append>
                            <Button onClick={taskSubmitted}>Submit</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Col>
        </Frame>);
}