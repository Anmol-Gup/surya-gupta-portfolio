import Technology from "./child/Technology"

type Skill = {
    skill: string
}

const skills: Skill[] = [
    {
        skill: 'html',
    },
    {
        skill: 'css'
    },
    {
        skill: 'javascript',
    },
    {
        skill: 'typescript',
    },
    {
        skill: 'react',
    },
    {
        skill: 'sql',
    },
    {
        skill: 'php',
    },
    {
        skill: 'nodejs',
    },
    {
        skill: 'power bi'
    },
    {
        skill: 'tailwind',
    },
    {
        skill: 'bootstrap',
    },
    {
        skill: 'python',
    },
    {
        skill: 'c++',
    },
    {
        skill: 'hubspot',
    }
]


const Skills:React.FC=()=>{
    return(<div data-aos='fade-up' className='skills md:container m-auto md:mt-14 mt-12 md:px-12'>
        <h3 className="font-medium text-4xl text-center text-white mb-8 sm:mb-10">Skills</h3>
        <div className="flex justify-center gap-10 flex-wrap">
            {
                skills.map((tech: Skill, index: number) => {
                    return <Technology skill={tech.skill} key={index} />
                })
            }
        </div>
    </div>)
}
export default Skills
