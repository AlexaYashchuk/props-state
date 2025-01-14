import { useState } from "react";

const TextComp = () => {

    const [text,setText] = useState(`ТЕКУЩИЙ ТЕКСТ`)

    const changeText = () => {
        setText((text) => text = `REDEV`)
    }

    return (
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={changeText}>Изменить текст</button>
        </div>
    )


}

export default TextComp;