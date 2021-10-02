import React, { useState } from "react"

interface Props {
    text: string
    
}

const Checkbox: React.FC<Props> = ({ text }) => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <label htmlFor={text}>{text}</label>
            <input 
                type="checkbox"
                value={text}
                name={text}
                id={text}
                onClick={() => setChecked(checked)}
            />
        </>
    )
}

export default Checkbox;