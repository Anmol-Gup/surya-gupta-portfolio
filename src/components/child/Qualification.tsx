import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";

const Qualification: React.FC = () => {
    return (<div data-aos='fade-up' className="flex lg:flex-row flex-col justify-evenly gap-6 lg:my-6 lg:px-24 md:px-5 px-4 xl:my-14 my-4 md:my-12">
        <div className="educations basis-1/2">
            <div className="education-heading flex items-center gap-2 mb-3">
                <FaGraduationCap className="text-white text-3xl text-center mb-2" />
                <h3 className="font-medium text-3xl text-center text-white mb-2">Education</h3>
            </div>
            <div className="institutions border-l-2 border-l-orange px-6 flex flex-col gap-4">
                <Education
                    year='2018-2022'
                    course='B.Tech (Computer Science & Engineering)'
                    institute="United College Of Engineering & Management"
                />
                <Education
                    year='2017-2018'
                    course='Intermediate'
                    institute="Ewing Christian Public Senior Secondary School"
                />
                <Education
                    year='2015-2016'
                    course='High School'
                    institute="Ewing Christian Public Senior Secondary School"
                />
            </div>
        </div>
        <div className="experiences basis-1/2 md:mt-3 lg:mt-0">
            <div className="experience-heading flex items-center gap-3 mb-3">
                <FaBriefcase className="text-white text-2xl text-center mb-2" />
                <h3 className="font-medium text-3xl text-center text-white mb-2">Experience</h3>
            </div>
            <div className="experiences border-l-2 border-l-orange px-6 flex flex-col gap-4">
                <Experience 
                    year='March 2022-May 2023'
                    organization="Harman Connected Services"
                    role="Associate Engineer"
                />
                <Experience 
                    year='Septmber 2023-October 2023'
                    organization="KultureHire"
                    role="Data Analyst Intern"
                />
                <Experience 
                    year='April 2021-November 2021'
                    organization="UseMyNotes"
                    role="Content Writer Intern"
                />
            </div>
        </div>
    </div>)
}
export default Qualification