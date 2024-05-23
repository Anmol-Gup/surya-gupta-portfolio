import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import SkillIcon from "./SkillIcon";


interface TechnologyProp {
    skill: string;
    level: string;
}

const renderIcon = (skill: string, level: string) => {
    switch (skill) {
        case 'html': return <SkillIcon Icon={FaHtml5} level={level} />
        case 'css':  return <SkillIcon Icon={IoLogoCss3} level={level} />
        case 'javascript': return <SkillIcon Icon={SiJavascript} level={level} />
        case 'react': return <SkillIcon Icon={FaReact} level={level} />
        case 'nodejs': return <SkillIcon Icon={FaNodeJs} level={level} />
        case 'php': return <SkillIcon Icon={FaPhp} level={level} />
        case 'sql': return <SkillIcon Icon={DiMsqlServer} level={level} />
        case 'python': return <SkillIcon Icon={FaPython} level={level} />
        case 'bootstrap': return <SkillIcon Icon={FaBootstrap} level={level} />
        case 'tailwind': return <SkillIcon Icon={RiTailwindCssFill} level={level} />
        case 'power bi': return <SkillIcon Icon={SiPowerbi} level={level} />
        default: return null
    }
}

const Technology: React.FC<TechnologyProp> = ({ skill, level }) => {
    return (<div className={`text-center capitalize ${skill} flex flex-col items-center gap-3`}>
        {
            renderIcon(skill, level)
        }
    </div>)
}
export default Technology