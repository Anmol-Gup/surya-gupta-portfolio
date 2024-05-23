import Progress from './child/Progress';
import Navbar from './child/Navbar';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [navColor, setNavColor] = useState<boolean>(false)

  const handleSticky = () => {
    if (window.scrollY > 200)
      setNavColor(true)
    else
      setNavColor(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSticky)

    return () => window.removeEventListener('scroll', handleSticky)
  }, [])

  return (
    <>
      <Progress />
      <header className={`sticky top-0 z-40 w-full lg:px-10 xl:px-20 lg:py-3 px-6 py-4 items-center flex justify-between bg-[#2b2d33] ${navColor ? 'bg-[#2b2d33]' : 'bg-black'} `}>
        <h1 className="text-3xl md:text-4xl font-medium text-white md:basis-1/2">Surya</h1>
        <Navbar navColor={navColor}/>
      </header>
    </>
  );
};

export default Header;
