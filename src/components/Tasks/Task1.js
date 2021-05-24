import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Form, Col, Button, InputGroup} from "react-bootstrap";
import tasks from "../../tasks_data/tasks_1.json";

export default function Task1() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selected, setSelected] = useState(0);

    if (finished) {
        return (
            <Frame code={code}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>)
    }

    const taskSubmitted = () => {   
        if (answer.trim().length > 0) {
            setSubmitted(false);
            setSelected(selected + 1);
            setCode(code+1);

            if (selected >= tasks.length - 1) {
                setFinished(true);
            }

            setAnswer("");
        } else {
            setSubmitted(true)
        }
    }

    return (
        <Frame code={code}>
            <Col sm={12}>
                <h5>Whilst you're waiting, why not do something productive?</h5>
                <p>{tasks[selected].question}</p>
            </Col>
            <Col sm={12}>
                <Form>
                    <Image src={process.env.PUBLIC_URL + tasks[selected].image} style={{ maxHeight: "300px", marginBottom: "25px" }} />
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