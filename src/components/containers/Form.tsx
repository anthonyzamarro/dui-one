import React from 'react';

const Form: React.FC = (prop) => {
    return (
        <div>
            Form 
            {prop.children}
        </div>
    )
}

export default Form