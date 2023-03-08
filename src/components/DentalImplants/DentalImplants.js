import React from 'react'
import AllWeb from '../AllWeb/AllWeb';
const dentals = [
    { id: 1, name: ' DENTAL IMPLANTS GRANTS' },
    { id: 2, name: ' DENTAL IMPLANT SCHOOL NEAR' },
    { id: 3, name: ' DENTAL IMPLANTS TURKEY' },
    { id: 4, name: ' DENTAL IMPLANTS CLINICAL' },
    { id: 5, name: ' DENTAL IMPLANTS CODES 2020' },
];

const DentalImplants = () => {
    return (
        <div className="h-auto bg-[#0F1C1D] flex flex-row">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                <div className=' w-auto h-full  text-gray-50 flex flex-row justify-center'>
                    <ul className='text-xl leading-10 mt-10'>
                        {
                            dentals.map((dental, index) => (
                                <li key={dental.id} className="tex-sm sm:text-xl p-3"><span className='border border-dashed border-gray-400 rounded-full p-2'>{index + 1}</span>{dental.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-span-2 w-full h-4/5 bg-white">
                    <AllWeb />
                </div>
            </div>
        </div>
    )
}

export default DentalImplants