import Frame from "../Frame/Frame";
import { useState } from "react";
import { Image, Col } from "react-bootstrap";
import tasks from "../../tasks_data/tasks_3.json";

export default function Task3() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [correct, setCorrect] = useState(false);
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
        setCode(code+1);

        if (selected >= tasks.length - 1) {
            setFinished(true);
        }
    }

    return <Frame code={code}>
        <Col sm={12}>
            <h5>Whilst you're waiting, why not do something productive?</h5>
            <p dangerouslySetInnerHTML={{ __html: tasks[selected].question }}></p>
        </Col>
        <Col sm={8}>
            {tasks[selected].options.map((x) => (
                <Image src={process.env.PUBLIC_URL + x} style={{ maxWidth: "300px", marginBottom: "25px", marginRight: "25px" }} onClick={taskSubmitted}/>
            ))}
        </Col>
    </Frame>

    //Show a word and 4 images, task workers have to choose the image that is described
}