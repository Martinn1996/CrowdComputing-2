import Frame from "../Frame/Frame"
import { useState } from "react";

export default function Task5() {
    const [code, setCode] = useState(0);

    return <Frame code={code}><img src={process.env.PUBLIC_URL + "/images/loading.gif"} alt="Waiting in queue..." /></Frame>
    //Show loading animation, no task (benchmark)
}