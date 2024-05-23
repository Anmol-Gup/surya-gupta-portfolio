import { SlCalender } from "react-icons/sl";

interface ExperienceProp {
    year: string;
    organization: string;
    role: string;
}

const Experience: React.FC<ExperienceProp> = ({year, organization, role}) => {
    return (<div className="experience border-2 border-orange px-3 py-2 rounded-md">
        <div className="flex gap-3 items-center">
            <SlCalender className="text-orange font-bold" />
            <p className="text-white">{year}</p>
        </div>
        <p className="lg:text-xl font-medium text-white text-lg py-1">{organization}</p>
        <p className="text-white lg:text-lg text-base py-1">{role}</p>
    </div>)
}
export default Experience