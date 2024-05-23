import { SlCalender } from "react-icons/sl";

interface EducationProp {
    year: string;
    course: string;
    institute: string
}

const Education: React.FC<EducationProp> = ({ year, course, institute }) => {
    return (<div className="education border-2 border-orange px-3 py-2 rounded-md">
        <div className="flex gap-3 items-center">
            <SlCalender className="text-orange font-bold" />
            <p className="text-white">{year}</p>
        </div>
        <p className="lg:text-xl text-lg font-medium text-white py-1">{course}</p>
        <p className="text-white lg:text-lg text-base py-1">{institute}</p>
    </div>)
}
export default Education
