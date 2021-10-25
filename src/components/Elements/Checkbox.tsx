import React, { useState } from "react"

interface Props {
    text: string,
    check: boolean
}

const Checkbox: React.FC<Props> = ({ text, check }) => {
    const [checked, setChecked] = useState();
    return (
        <div className="checkbox__container">
            <label htmlFor={text}>{text}</label>
            <input 
                type="checkbox"
                value={text}
                name={text}
                id={text}
                // onClick={() => setChecked()}
            />
        </div>
    )
}

export default Checkbox;