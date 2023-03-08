import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
    { id: 1, name: 'ACCULYNX.COM', path: '/' },
    { id: 2, name: 'CABLESROOFING.COM', path: '/path2' },
    { id: 3, name: 'CSIROOFERS.COM', path: '/path3' },
    { id: 4, name: 'CUPAPIZARRAS.COM', path: '/path4' },
    { id: 5, name: 'ROFLINK.COM', path: '/path5' },
]
const DynamicDropdown = () => {
    const [selectedValue, setSelectedValue] = useState('ACCULYNX.COM');

    const navigate = useNavigate();

    const changeHandler = (event) => {
        const selectedOption = options.find(option => option.name === event.target.value);
        navigate(selectedOption.path);
        setSelectedValue(event.target.value);
    };
    return (
        <div className=" pt-2 mr-2">
            <select className="w-52 h-8 bg-teal-800 border-none text-gray-50 rounded-md border-green-600 " value={selectedValue} onChange={changeHandler}>
                {options.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default DynamicDropdown;