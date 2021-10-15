import React from "react"

interface Props {
    text: string,
    name: string
}

const Radio: React.FC<Props> = ({ text, name }) => {
    let toggle = (e: object) => {
        console.log(e, 'onChange')
    }

    return (
        <div className="radio__container__inner" onChange={(e: object) => toggle(e)}>
            <input 
                type="radio"
                value={text}
                name={name}
                id={text}
            />
            <label htmlFor={text}>{text}</label>
        </div>
    )
}

export default Radio;