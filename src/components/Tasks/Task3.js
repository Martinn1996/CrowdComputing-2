import Frame from "../Frame/Frame";
import { useState } from "react";
import { Image, Col, Button, Row, Container } from "react-bootstrap";
import tasks from "../../tasks_data/tasks_3.json";

const style1 = { maxHeight: "100%", marginBottom: "25px", marginRight: "25px" };
const style2 = {
    ...style1,
    border: "5px solid rgba(125,125,125, 0.7)",
    "borderRadius": "5px"
}

export default function Task3() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [answer, setAnswer] = useState(-1);
    const [selected, setSelected] = useState(0);

    if (finished) {
        //setCode(1) //TBD encode correct
        return (
            <Frame code={code}>
                <Col sm={12}>
                    <p>Thank you for your time!</p>
                </Col>
            </Frame>
        )
    }

    const taskSubmitted = () => {
        setSelected(selected + 1);
        setCode(code + 1);
        setAnswer(-1)
        if (selected >= tasks.length - 1) {
            setFinished(true);
        }
    }

    const answerSelected = (i) => {
        setAnswer(i)
    }

    return <Frame code={code}>
        <Col sm={12}>
            <h5>Whilst you're waiting, why not do something productive?</h5>
            <p dangerouslySetInnerHTML={{ __html: tasks[selected].question }}></p>
        </Col>
        <Col sm={8}>
            <Container>
                <Row>
                    {tasks[selected].options.map((x, i) => (
                        <Col style={{ maxHeight: "200px", padding: "10px", textAlign: "center"}} sm={6}><Image src={process.env.PUBLIC_URL + x} style={i === answer ? style2 : style1} onClick={() => answerSelected(i)} /></Col>
                    ))}
                </Row>
            </Container>
            <br />
            <Button onClick={taskSubmitted} disabled={answer === -1}>Submit</Button>
            <br />
            <br />
        </Col>
    </Frame>

    //Show a word and 4 images, task workers have to choose the image that is described
}