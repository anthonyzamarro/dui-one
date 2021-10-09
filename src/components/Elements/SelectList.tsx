import React, { useState } from 'react';

interface SelectListProps {
    name: string,
    numbers?: {start: number, end: number},
    months?: string[]
}

const SelectList: React.FC<SelectListProps> = ({name, numbers, months}) => {
    const [value, setValue] = useState();
    // console.log(numbers);
    var numbersArray = [];
    if (numbers?.start && numbers.end) {
        var { start } = numbers;
        var { end } = numbers;
        while(start <= end){
            numbersArray.push(start++);
        }
        if (name === 'YY') numbersArray.reverse();
    }
    return (
        <div className="selectlist__container-inner">
            <select value={value} onChange={() => setValue(value)}>
                <option defaultValue={name}>{name}</option>
                {
                    numbers && numbersArray.map((number, idx) => <option value={number} key={idx}>{number}</option>)
                }
                {months && months.map((month, idx) => <option value={month} key={idx}>{month}</option>)}
          </select>
        </div>
    );
}

export default SelectList;