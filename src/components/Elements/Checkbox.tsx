import React, { useEffect, useState } from "react"

interface Props {
    text: string,
    check: boolean,
    // handleClick: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox: React.FC<Props> = ({ text, check }) => {
    const [checked, setChecked] = useState(check);

    // parent of Checkbox controls state (select all or deselect all)
    useEffect(() => {
        if (check) {
            setChecked(true);
        } else if (!check) {
            setChecked(false);
        }
    }, [check]);

    return (
        <div className="checkbox__container">
            <label htmlFor={text}>{text}</label>
            <input 
                type="checkbox"
                value={text}
                checked={checked}
                name={text}
                id={text}
                // each Checkbox can control its own state here
                onChange={() => setChecked(!checked)}
            />
        </div>
    )
}

export default Checkbox;