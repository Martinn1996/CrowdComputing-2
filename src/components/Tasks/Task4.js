import Frame from "../Frame/Frame"
import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import tasks from "../../tasks_data/tasks_4.json";

export default function Task4() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selected, setSelected] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [option, setOption] = useState("");
    if (finished) {
        return (
            <Frame code={code}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>)
    }

    const taskSubmitted = () => { 
        // next task
        console.log(option);
        if (option.trim().length > 0) {
            setSelected(selected + 1);
            setCode(code+1);
            setOption("");
            setSubmitted(false);
            if (selected >= tasks.length - 1) {
                setFinished(true);
            }
        } else {
            setSubmitted(true);
        }
    }

    return (
        <Frame code={code} setCode={setCode}>
            <Col sm={12}>
                <h5>{tasks[selected].question}</h5>
                <Form>
                    <Form.Group>
                        {tasks[selected].options.map((x) => (
                            <Form.Check label={x} name={`group${selected}`} type="radio" id={`inline-radio-${selected}`}  isInvalid={submitted && option.trim().length === 0} onChange={() => setOption(x)} checked={(x === option)}  />
                        ))}
                    </Form.Group>
                    <Button onClick={taskSubmitted}>Submit</Button>
                </Form>
            </Col>
        </Frame>);
}