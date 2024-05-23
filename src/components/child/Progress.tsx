import React, { useState, useEffect } from "react"

const Progress: React.FC = () => {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const scrollListener = () => {
            const currentProgress: number = window.scrollY
            const scrollHeight: number = document.body.scrollHeight - window.innerHeight

            if (scrollHeight)
                setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
        }

        window.addEventListener('scroll', scrollListener)

        return () => window.removeEventListener('scroll', scrollListener)

    }, []);

    return (<span
        className="w-full h-1 fixed top-0 left-0 bg-orange"
        style={{ transform: `translateX(${progress - 100}%)` }}
    ></span>)
}
export default Progress