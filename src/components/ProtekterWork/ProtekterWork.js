import React from 'react'
import imgOne from '../../img/group16.jpg';
import imgTwo from '../../img/group17.png';
import imgThree from '../../img/group18.png';
import imgFour from '../../img/group19.png'
import './ProtekterWork.css';

const ProtekterWork = () => {
    return (
        <section className=" body-font ">
            <h1 className="  text-5xl font-bold text-center my-10">How Brand Prote<span className=" text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-800">k</span>ter Works</h1>
            <div className=""></div>
            <div className=" container  px-5 py-24 mx-auto">
                <div className="protectBackground  flex flex-wrap  text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <img className='w-[100px] h-[100px] mx-auto' src={imgOne} />
                        <p className='font-bold'>Brand Prote<span className=" text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-800">K</span>ter Monitors Your<br /> Company Name On Google <br /> Every Day</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <img className='w-[100px] h-[100px] mx-auto' src={imgTwo} />
                        <p className='font-bold'>Brand Prote<span className=" text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-800">K</span>ter Finds All <br /> Competitors And Violator And <br /> Compiles A Report</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <img className='w-[100px] h-[100px] mx-auto' src={imgThree} />
                        <p className='font-bold'>Brand Prote <span className=" text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-800">K</span>ter Reclaims <br /> Your Brand Keywords In <br /> Minutes</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <img className='w-[100px] h-[100px] mx-auto' src={imgFour} />
                        <p className='font-bold' >Brand Prote<span className=" text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-800">K</span>ter Reclaims <br /> Your Brand KEywords In <br /> Minutes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProtekterWork