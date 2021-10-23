import React from "react";

interface Props {
    text: string,
    selectAll: SelectAll; // arrow function
}

const Clickable: React.FC<Props> = ({ text, selectAll }) => {
    
    return (
        <div className="clickable__container">
                <button 
                    onClick={() => selectAll(true)}
                >
                    {text}
                </button>
        </div>
    )
}

export default Clickable;