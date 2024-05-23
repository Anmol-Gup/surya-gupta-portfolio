import Technology from "./child/Technology"

type Skill = {
    skill: string;
    level: string
}

const skills: Skill[] = [
    {
        skill: 'html',
        level: 'intermediate'
    },
    {
        skill: 'css',
        level: 'intermediate'
    },
    {
        skill: 'javascript',
        level: 'intermediate'
    },
    {
        skill: 'react',
        level: 'beginner'
    },
    {
        skill: 'sql',
        level: 'intermediate'
    },
    {
        skill: 'php',
        level: 'intermediate'
    },
    {
        skill: 'nodejs',
        level: 'beginner'
    },
    {
        skill: 'power bi',
        level: 'beginner'
    },
    {
        skill: 'tailwind',
        level: 'beginner'
    },
    {
        skill: 'bootstrap',
        level: 'intermediate'
    },
    {
        skill: 'python',
        level: 'intermediate'
    },
    {
        skill: 'c++',
        level: 'intermediate'
    }
]


const Skills:React.FC=()=>{
    return(<div data-aos='fade-up' className='skills md:container m-auto md:mt-14 mt-12 md:px-12'>
        <h3 className="font-medium text-4xl text-center text-white mb-8 sm:mb-10">Skills</h3>
        <div className="flex justify-center gap-10 flex-wrap">
            {
                skills.map((tech: Skill, index: number) => {
                    return <Technology skill={tech.skill} level={tech.level} key={index} />
                })
            }
        </div>
    </div>)
}
export default Skills