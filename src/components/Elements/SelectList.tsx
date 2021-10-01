import React, { useState } from 'react';

interface SelectListProps {

}

const SelectList: React.FC<SelectListProps> = ({}) => {
    const [value, setValue] = useState();
    return (
        <div>
            <select value={value} onChange={() => setValue(value)}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
          </select>
        </div>
    );
}

export default SelectList;