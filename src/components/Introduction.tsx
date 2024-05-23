import React from "react"

const Introduction: React.FC = () => {
    return (<>
        <div id="home" className="md:mt-24 lg:mt-14 mt-16 introduction flex flex-wrap-reverse justify-evenly items-center px-3 lg:px-10">
            <div className="description flex justify-center items-center md:basis-[60%] sm:px-8 lg:px-16 xl:px-24">
                <div className="md:text-left text-center">
                    <h3 className='text-orange lg:text-3xl text-2xl font-medium md:mt-0 mt-8'>Hello, I'm</h3>
                    <h2 className='text-white lg:text-5xl text-4xl font-medium py-3'>Surya P. Gupta</h2>
                    <p className='text-white py-2 text-lg'>I'm a developer based in India, and I'm very passionate and dedicated to my work.</p>
                    <br />
                    <a href='#about' className='about_me decoration-none border-2 bg-orange border-orange font-medium text-white rounded-full px-5 py-2'>
                        <span>More About Me</span>
                    </a>
                </div>
            </div>
            <div className="image md:basis-[40%] flex justify-center">
                <img src="myself.jpg" className="md:w-64 lg:w-72 w-56" alt="Surya" />
            </div>
        </div>
    </>)
}
export default Introduction