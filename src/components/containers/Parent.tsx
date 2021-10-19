import React from "react";
import Clickable from "../elements/Clickable"

interface Props {
}

const Parent: React.FC<Props> = () => {

    const getValue = (e: string) => {
        console.log('parent', e);
    }
    
    return (
        <div className="parent__container">
            <Clickable
                text="SELECT ALL"
                thing={(blah: string) => getValue(blah)}
            />
        </div>
    )
}

export default Parent;