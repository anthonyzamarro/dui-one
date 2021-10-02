import React, { useState } from "react"

interface Props {
    text: string
    
}

const Radio: React.FC<Props> = ({ text }) => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <input 
                type="radio"
                value={text}
                name={text}
                id={text}
                onClick={() => setChecked(checked)}
            />
            <label htmlFor={text}>{text}</label>
        </>
    )
}

export default Radio;