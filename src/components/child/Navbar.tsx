import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

interface NavbarProp {
    navColor: boolean;
}
const Navbar: React.FC<NavbarProp> = ({ navColor }) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(innerWidth)
    const [activeLink, setActiveLink] = useState<string>('home')

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        console.log(width, navColor)
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Initial width check
        if (width >= 1024) {
            setToggle(true);
        } else {
            setToggle(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width])

    const handleLink = (link: string) => {
        setActiveLink(link)
    }

    return (<>
        <div className="lg:hidden block px-4 py-4 basis-1/2 absolute right-0">
            {toggle ? (
                <IoClose onClick={handleToggle} className="text-2xl text-white" />
            ) : (
                <GiHamburgerMenu className="text-white text-2xl" onClick={handleToggle} />
            )}
        </div>
        {toggle && <nav className={`${navColor ? 'lg:bg-[#1c2541]' : 'lg:bg-[#0b132b]'} lg:static basis-1/2 absolute top-full left-0 lg:top-0 w-full bg-[#0b132b]`}>
            <ul className={`text-left font-medium lg:w-full lg:h-full flex lg:flex-row lg:justify-evenly flex-col lg:gap-4 gap-2 text-white font-medium px-3 py-4`}>
                <li><a href="#home" className={`list-none decoration-none ${activeLink === 'home' ? 'text-orange' : 'text-white'}`} onClick={() => handleLink('home')}>Home</a></li>
                <li><a href="#about" className={`list-none decoration-none ${activeLink === 'about' ? 'text-orange' : 'text-white'}`} onClick={() => handleLink('about')}>About</a></li>
                <li><a href="#projects" className={`list-none decoration-none ${activeLink === 'projects' ? 'text-orange' : 'text-white'}`} onClick={() => handleLink('projects')}>Projects</a></li>
                <li><a href="https://myspgcom.wordpress.com/" target='_blank' className={`list-none decoration-none ${activeLink === 'blogs' ? 'text-orange' : 'text-white'}`} onClick={() => handleLink('blogs')}>Blog</a></li>
                <li><a href="#contact" className={`list-none decoration-none ${activeLink === 'contact' ? 'text-orange' : 'text-white'}`} onClick={() => handleLink('contact')}>Contact</a></li>
                <li className='my-3 lg:my-0'><a href='./SuryaPrakashGupta_Resume.pdf' className='list-none decoration-none border-2 border-orange rounded-full px-3 py-2 transition-all ease cv' download>Download CV</a></li>
            </ul>
        </nav>}
    </>)
}

export default Navbar
