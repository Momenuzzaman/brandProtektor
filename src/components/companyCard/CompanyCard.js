import React from 'react'
import './CompanyCard.css';

const CompanyCard = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mx-auto">
                    <div className="card md:w-3/4 md:mx-auto rounded-3xl h-2/5">
                        <div className=" w-full  text-center  px-4">
                            <div className="w-full py-28">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Your Work Hard To Build Your Business</h5>
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Countless OF Hours, Love, Sweat And Tears</h5>
                                <p className="mb-5 text-base  sm:text-lg text-white font-bold">Every day competitors are swarming their ads on Your <br /> business on Google. Stealing your customers..</p>
                                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    <button className="font-bold w-52 h-14 mb-6 rounded-3xl text-center bg-white  bg-gradient-to-br from-lime-300 to-green-200 ">FIGHT BACK NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyCard