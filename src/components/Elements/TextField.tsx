import React, { useState } from 'react';

interface Props {
    placeholder: string,
    type: string,
    name: string,
    helperText?: string
}


const TextField: React.FC<Props> = ({ placeholder, type, name, helperText }) => {
    const [text, setText] = useState("");
    return (
        <div>
            <label htmlFor={name}>{name}</label>
                <input
                    onChange={e => setText(e.target.value)}
                    value={text}
                    name={name}
                    placeholder={placeholder} 
                    type={type}
                />
                <small>{helperText}</small>
        </div>
    )
    
}

export default TextField