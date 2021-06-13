import Frame from "../Frame/Frame"
import { useState } from "react";

export default function Task5() {
    const [code, setCode] = useState(0);

    return <Frame code={code}></Frame>
    //Show loading animation, no task (benchmark)
}