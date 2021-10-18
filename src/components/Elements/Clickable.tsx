import React from "react";

interface Props {
    text: string,
}

const Clickable: React.FC<Props> = ({ text }) => {

    const getValue = (e: object) => {
        console.log(e);
    }
    
    return (
        <div className="clickable__container">

                <p 
                    onClick={(e: object) => getValue(e)}
                >
                    {text}
                </p>
        </div>
    )
}

export default Clickable;