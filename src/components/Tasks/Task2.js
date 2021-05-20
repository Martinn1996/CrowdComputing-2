import Frame from "../Frame/Frame"
import { useState } from "react";

export default function Task2() {
    const [code, setCode] = useState(0);

    return <Frame code={code} setCode={setCode}>TODO IMPLEMENT TASK 2</Frame>
}