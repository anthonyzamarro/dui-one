import React, { useState } from "react"

interface Props {
    text: string
    
}

const Radio: React.FC<Props> = ({ text }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="radio__container__inner">
            <input 
                type="radio"
                value={text}
                name={text}
                id={text}
                onClick={() => setChecked(checked)}
            />
            <label htmlFor={text}>{text}</label>
        </div>
    )
}

export default Radio;