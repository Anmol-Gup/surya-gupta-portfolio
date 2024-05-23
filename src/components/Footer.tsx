import SocialMedia from "./child/SocialMedia"

type SocialMediaAlias = {
    name: string;
    link: string;
}

const socialmediaicons: SocialMediaAlias[] = [
    {
        name: 'facebook',
        link: ''
    },
    {
        name: 'instagram',
        link: 'instagram.com/suryagupta314'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/surya-prakash-gupta-39b497180/'
    },
    {
        name: 'github',
        link: 'https://github.com/Anmol-Gup'
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/@suryagupta1999'
    },
    {
        name: 'twitter',
        link: 'twitter.com/suryapr0951208',
    },
    {
        name: 'snapchat',
        link: 'https://www.snapchat.com/add/suryagupta9589'
    }
]

const Footer: React.FC = () => {
    return (<footer className="mt-6 flex flex-col gap-4 py-6 bg-[#2b2a2a]">
        <p className="text-white text-center">Developed with &#10084; by Surya &copy; {new Date().getFullYear()}</p>
        <div className="socialmedia flex justify-center gap-6">
            {
                socialmediaicons?.map((socialmedia: SocialMediaAlias, index: number) => {
                    return <SocialMedia name={socialmedia.name} link={socialmedia.link} key={index + 1} />
                })
            }
        </div>
    </footer>)
}
export default Footer