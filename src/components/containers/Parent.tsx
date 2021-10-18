import React from "react";

interface Props {
}

const Parent: React.FC<Props> = ({ children }) => {

    const getValue = (e: object) => {
        console.log(e);
    }
    
    return (
        <div className="parent__container">
            { children }
        </div>
    )
}

export default Parent;