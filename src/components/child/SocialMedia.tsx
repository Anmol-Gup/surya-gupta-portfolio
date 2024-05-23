import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

interface SocialMediaProp {
    name: string;
    link: string;
}

const SocialMedia: React.FC<SocialMediaProp> = ({ name, link }) => {

    const renderSMIcon = (name: string) => {
        switch (name) {
            case 'linkedin': return <FaLinkedin className="text-2xl md:text-3xl text-white" />
            case 'youtube': return <FaYoutube className="text-2xl md:text-3xl text-white" />
            case 'twitter': return <FaXTwitter className="text-2xl md:text-3xl text-white" />
            case 'github': return <FaGithub className="text-2xl md:text-3xl text-white" />
            case 'facebook': return <FaFacebook className="text-2xl md:text-3xl text-white" />
            case 'instagram': return <FaInstagram className="text-2xl md:text-3xl text-white" />
            case 'snapchat': return <FaSnapchatGhost className="text-2xl md:text-3xl text-white" />
            default: return null
        }
    }
    return (<a href={`${link}`} target="_blank">
        {
            renderSMIcon(name)
        }
    </a>
    )
}

export default SocialMedia