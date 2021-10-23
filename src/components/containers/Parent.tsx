import React from "react";
import Clickable from "../elements/Clickable"

interface Props {
    selectAll: SelectAll; // arrow function
}

const Parent: React.FC<Props> = ({ selectAll }) => {

    return (
        <div className="parent__container">
            <Clickable
                text="SELECT ALL"
                selectAll={selectAll}
            />
        </div>
    )
}

export default Parent;