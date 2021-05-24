import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Col, Button, Form } from "react-bootstrap";
import tasks from "../../tasks_data/tasks_2.json"

export default function Task2() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
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
        setSelected(selected + 1);
        setCode(code+1);

        if (selected >= tasks.length - 1) {
            setFinished(true);
        }
    }

    return (
        <Frame code={code}>
            <Col sm={12}>
                <h5>Whilst you're waiting, why not do something productive?</h5>
                <p>{tasks[selected].question}</p>
            </Col>
            <Col sm={12}>
                <Image src={process.env.PUBLIC_URL + tasks[selected].image} style={{ maxHeight: "300px", marginBottom: "25px" }}></Image>
                <Form>
                    <Form.Group>
                        {tasks[selected].options.map((x) => (<Button onClick={taskSubmitted} style={{marginRight: "10px"}}>{x}</Button>))}
                    </Form.Group>
                </Form>
            </Col>
        </Frame>);
}