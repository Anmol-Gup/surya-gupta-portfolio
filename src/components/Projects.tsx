import Project from "./child/Project"
import { TECarousel } from "tw-elements-react";

type Project = {
    name: string;
    link: string;
}

const projects: Project[] = [
    {
        name: 'project2.png',
        link: 'https://github.com/Anmol-Gup/shortlinkify-url-shortener'
    },
    {
        name: 'project3.png',
        link: 'https://github.com/Anmol-Gup/PHP-CourseHub'
    },
    {
        name: 'project4.png',
        link: 'https://github.com/Anmol-Gup/resume-analyzer'
    },
    {
        name: 'project5.png',
        link: 'https://github.com/Anmol-Gup/RAG-QA-Bot'
    },
    {
        name: 'project6.png',
        link: 'https://youtu.be/ghDTGPlo_lU?si=_fG5k2nkvFhpGhHq'
    },
    {
        name: 'project1.png',
        link: 'https://youtu.be/Ov8YMVFV-iE?si=s1IS7Drl2eUIeGTf'
    },
]

const Projects: React.FC = () => {
    return (<div id='projects' data-aos="fade-up" className="project md:container m-auto mt-2 mb-8 flex jutify-center flex-col items-center lg:px-12">
        <h2 className='text-center text-3xl lg:text-4xl text-orange font-medium mb-8 sm:mb-8'>Projects</h2>
        <div className="cards flex justify-center gap-3 px-6 md:px-10 pb-12">
            <TECarousel showControls showIndicators ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {
                        projects?.map((project: Project, index: number) => {
                            return <Project image={`./projects/${project.name}`} key={index} link={project.link} itemID={index + 1} />
                        })
                    }
                </div>
            </TECarousel>
        </div>
        <a href='http://www.github.com/Anmol-Gup' target='_blank' className="decoration-none rounded-full px-3 py-2 text-white bg-orange w-max">View More</a>
    </div>
    )
}

export default Projects