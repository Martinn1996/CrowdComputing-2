import { useState } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

export default function Frame({ children, code, setCode }) {
    const [stage, setStage] = useState(1);
    let Stage = null;
    switch (stage) {
        case 1:
            Stage = Stage1;
            break;
        case 2:
            Stage = Stage2;
            break;
        case 3:
            Stage = Stage3;
            break;
        default:
            Stage = Stage1;
    }
    return <div>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Queue</Navbar.Brand>
            </Container>
        </Navbar>
        <Stage setStage={setStage} code={code}>
            {children}
        </Stage>
    </div>
}

function Stage1({ setStage }) {
    return <div>
        <br />
        <Container>
            <Row>
                <Col sm={4}><h3>Please enter the queue</h3></Col>
                <Col sm={8}><Button onClick={() => { setStage(2) }}>Enter queue</Button></Col>
                <Col><hr /></Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <p>
                        If you have any questions regarding the course content or an assignment, please enter the queue to talk to a teaching assistant.
                    </p>
                </Col>
                <Col sm={7}>
                    <ul>
                        <li>Current queue size: 5</li>
                        <li>Estimate waiting time: 2 min</li>
                        <li>Amount of TA's: 5</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
}

function changeQueue(queueSize, setQueueSize, setStage) {
    if (queueSize === 0) {
        setStage(3)
        return;
    }

    setTimeout(() => {
        setQueueSize(queueSize - 1)
        changeQueue(queueSize - 1, setQueueSize, setStage)
    }, 24000)
}

function Stage2({ children, setStage }) {
    const [queueSize, setQueueSize] = useState(5)
    changeQueue(queueSize, setQueueSize, setStage)
    return <div>
        <br />
        <Container>
            <Row>
                <Col sm={12}><h3>You are enqueued</h3> There are <b>{queueSize}</b> people waiting before you</Col>
                <Col><hr /></Col>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    </div>
}

function Stage3({ code }) {
    return (<div>
        <br />
        <Container>
            <Row>
                <Col>
                    <h3>Thank you for queueing</h3>
                    <hr />
                    <p>
                        Please return to toloka now to fill out the questionnaire and enter your identification code.
                    </p>
                    <p><b>Identification code: {code}</b></p>
                </Col>
            </Row>
        </Container>
    </div>)
}