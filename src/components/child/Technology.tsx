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
import { FaHubspot } from "react-icons/fa";

interface TechnologyProp {
    skill: string;
}

const renderIcon = (skill: string) => {
    switch (skill) {
        case 'html': return <SkillIcon Icon={FaHtml5} />
        case 'css':  return <SkillIcon Icon={IoLogoCss3} />
        case 'javascript': return <SkillIcon Icon={SiJavascript} />
        case 'react': return <SkillIcon Icon={FaReact}  />
        case 'nodejs': return <SkillIcon Icon={FaNodeJs}  />
        case 'php': return <SkillIcon Icon={FaPhp} />
        case 'sql': return <SkillIcon Icon={DiMsqlServer}  />
        case 'python': return <SkillIcon Icon={FaPython}  />
        case 'bootstrap': return <SkillIcon Icon={FaBootstrap}  />
        case 'tailwind': return <SkillIcon Icon={RiTailwindCssFill}  />
        case 'power bi': return <SkillIcon Icon={SiPowerbi} />
        case 'hubspot': return <SkillIcon Icon={FaHubspot} />
        default: return null
    }
}

const Technology: React.FC<TechnologyProp> = ({ skill }) => {
    return (<div className={`text-center capitalize ${skill} flex flex-col items-center gap-3`}>
        {
            renderIcon(skill)
        }
    </div>)
}
export default Technology
