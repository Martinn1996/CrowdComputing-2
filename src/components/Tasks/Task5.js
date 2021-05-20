import Frame from "../Frame/Frame"
import { useState } from "react";

export default function Task5() {
    const [code, setCode] = useState(0);

    return <Frame code={code} setCode={setCode}>TODO IMPLEMENT TASK 5</Frame>
}