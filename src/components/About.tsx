import Skills from "./Skills"
import PersonalInfo from "./child/PersonalInfo"
import Qualification from "./child/Qualification"

const About: React.FC = () => {
    return (<div id="about" data-aos="fade-up" className="px-3 py-12 text-white about mt-6 lg:mt-12 w-full">
        <h2 className='text-center text-3xl lg:text-4xl text-orange font-medium lg:mb-12 mb-6'>About Me</h2>
        <div className="lg:text-lg personal-info text-lg flex justify-between lg:flex-row flex-col lg:gap-10 gap-7 px-2 sm:px-10 lg:px-20">
            <div className="left basis-1/2 px-3">
                <p className='lg:text-left text-center'>Hello there! I'm Surya Prakash Gupta, an IT enthusiast & a developer based in India with 1 year of experience in the IT industry, and I'm very passionate and dedicated to my work with an eager to learn about new things. Currently, I am looking for an opportunity to work with someone who can help me grow in my skills and knowledge.</p>
            </div>
            <div className="lg:text-lg right basis-1/2 sm:grid grid-rows-4 grid-cols-2 sm:text-left flex justify-center flex-col text-center sm:px-16 lg:px-10 mb-4 mt-0">
                <PersonalInfo title="Name:" text="Surya Prakash Gupta" />
                <PersonalInfo title="Email:" text="prakashsurya1204@gmail.com" />
                <PersonalInfo title="Nationality:" text="Indian" />
                <PersonalInfo title="Date Of Birth:" text="12-Aug-1999" />
                <PersonalInfo title="Languages:" text="Hindi, English" />
                <PersonalInfo title="Address:" text="Prayagraj, Uttar Pradesh, India" />
                <div className="download_cv py-6">
                    <a href='../../src/assets/Surya_P__Gupta.pdf' className='decoration-none border-2 bg-black border-orange font-medium text-white rounded-full px-5 py-2' download>
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
        <Qualification />
        <Skills />
    </div>)
}

export default About