import React, { useState } from 'react';

interface SelectListProps {
    name: string,
    numbers?: {start: number, end: number},
    months?: string[]
}

const SelectList: React.FC<SelectListProps> = ({name, numbers, months}) => {
    const [value, setValue] = useState();
    // console.log(numbers);
    var arr = [];
    if (numbers?.start && numbers.end) {
        var { start } = numbers;
        var { end } = numbers;
        while(start <= end){
            arr.push(start++);
        }
        if (name === 'YY') arr.reverse();
    }
    return (
        <div>
            <select value={value} onChange={() => setValue(value)}>
                <option defaultValue={name}>{name}</option>
                {/* {numbers && Array.from({length:numbers},(v,k)=>k+1).map((number, idx) => <option value={number} key={idx}>{number}</option>)} */}
                {
                    numbers && arr.map((number, idx) => <option value={number} key={idx}>{number}</option>)
                }
                {months && months.map((month, idx) => <option value={month} key={idx}>{month}</option>)}
          </select>
        </div>
    );
}

export default SelectList;