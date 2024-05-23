import { TECarouselItem } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

interface ProjectCard {
    image: string;
    link: string;
    itemID: number;
}

const Project: React.FC<ProjectCard> = ({ image, link, itemID }) => {
    return (
        <div className="relative group">
            <TECarouselItem
                itemID={itemID}
                className="item relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
                <img
                    src={`./${image}`}
                    className="block w-full"
                    alt={`${image}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={`${link}`}
                        target="_blank"
                        className="text-white text-lg font-bold border-2 border-white px-3 py-1"
                    >
                        Click Here
                    </a>
                </div>
            </TECarouselItem>
        </div>
    );
};

export default Project;
