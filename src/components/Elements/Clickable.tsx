import React from "react";

interface Props {
    text: string,
    thing: (blah: string) => void; // arrow function
}

const Clickable: React.FC<Props> = ({ text, thing }) => {

    const getValue = (e: object) => {
        console.log('child', e);
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