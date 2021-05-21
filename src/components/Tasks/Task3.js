import Frame from "../Frame/Frame"
import { useState } from "react";
import { Image, Col } from "react-bootstrap";

export default function Task3() {
    const [code, setCode] = useState(0);
    const [finished, setFinished] = useState(false);
    const [correct, setCorrect] = useState(false);
    
    if (finished) {
        //setCode(1) //TBD encode correct
        return <Frame code={code} setCode={setCode}><p>Thank you for your time!</p></Frame>
    }

    return <Frame code={code} setCode={setCode}>
        <Col sm={12}>
            <h5>Whilst you're waiting, why not do something productive?</h5>
            <p>Could you identify which image below corresponds to a <b>boat</b>?</p>
        </Col>
        <Col sm={12}>
            <Image src={process.env.PUBLIC_URL + "/images/dog.jpeg"} width="200p" style={{ marginBottom: "25px", marginRight: "25px" }} onClick={() => setFinished(true)}></Image>
            <Image src={process.env.PUBLIC_URL + "/images/car.jpeg"} width="200p" style={{ marginBottom: "25px" }} onClick={() => setFinished(true)}></Image>
        </Col>
        <Col sm={12}>
            <Image src={process.env.PUBLIC_URL + "/images/boat.jpeg"} width="200p" style={{ marginBottom: "25px", marginRight: "25px" }} onClick={() => {
                setFinished(true)                
                setCorrect(true)
            }}></Image>
            <Image src={process.env.PUBLIC_URL + "/images/ball.jpg"} width="200p" style={{ marginBottom: "25px" }} onClick={() => setFinished(true)}></Image>
        </Col>
    </Frame>
    
    //Show a word and 4 images, task workers have to choose the image that is described
}