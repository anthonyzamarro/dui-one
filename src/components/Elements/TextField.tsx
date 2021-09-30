import React, { useState } from 'react';

interface Props {
    placeholder: string,
    type: string
}


const TextField: React.FC<Props> = ({ placeholder, type }) => {
    const [text, setText] = useState("");
    return (
        <div>
            <input
                onChange={e => setText(e.target.value)}
                value={text}
                placeholder={placeholder} 
                type={type}
            />
        </div>
    )
    
}

export default TextField