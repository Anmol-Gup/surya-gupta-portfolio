import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        if (window.scrollY > 250) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])


    return (<>
        {
            visible && <FaArrowCircleUp onClick={scrollToTop} className="cursor-pointer fixed bottom-6 right-6 bg-gray-800 text-4xl text-white rounded-full" />
        }
    </>
    )
}

export default ScrollToTop