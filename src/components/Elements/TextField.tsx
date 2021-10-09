import React, { useState } from 'react';

interface Props {
    type: string,
    name: string,
    helperText?: string
}


const TextField: React.FC<Props> = ({ type, name, helperText }) => {
    const [text, setText] = useState("");
    return (
        <div className={`${type}-input__container-inner`}>
            <label htmlFor={name}>{name}</label>
                <input
                    onChange={e => setText(e.target.value)}
                    value={text}
                    name={name}
                    type={type}
                />
                <small>{helperText}</small>
        </div>
    )
    
}

export default TextField;