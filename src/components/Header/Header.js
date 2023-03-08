import React from 'react';
import companyLogo from '../../img/Group.png';
import './Header.css';
import googleLogo from '../../img/frame.png'
import DynamicDropdown from '../DynamicDropdown/DynamicDropdown';

const Header = () => {
    return (
        <div className="backgroundImg">
            <div className=" flex flex-row  justify-center">
                <img className="mt-5" src={companyLogo} />
            </div>
            <p className='text-yellow-500 text-center mt-10'> GOOGLE BRAND AUDIT </p>
            <div
                className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <DynamicDropdown />
                        <p className="text-4xl  text-gray-50"> Is Hijacking Your</p>
                    </div>
                </div>
            </div>
            <div
                className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <div className="mt-2 flex flex-wrap justify-center gap-4">
                        <p className="text-4xl text-gray-50">Company Name Google</p>
                        <img className='w-10 h-10 mt-2' src={googleLogo} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10 mb">
                <button className="font-bold w-52 h-14 rounded-3xl text-center bg-white  bg-gradient-to-br from-lime-300 to-green-200 ">FIGHT BACK NOW</button>
            </div>
        </div >
    )
}
export default Header