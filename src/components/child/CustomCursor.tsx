import { useRef } from 'react'


const CustomCursor: React.FC = () => {
  const dot = useRef<HTMLDivElement | null>(null)
  const outline = useRef<HTMLDivElement | null>(null)

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX
    const posY = e.clientY

    if (dot.current) {
      dot.current.style.left = `${posX}px`
      dot.current.style.top = `${posY}px`
    }

    outline.current?.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: 'forwards', easing: 'ease-in-out' })
  })
  return (<><div ref={dot} className="pointer-events-none	cursor-dot w-2 z-50 h-2 bg-orange fixed top-0 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
    <div ref={outline} className="pointer-events-none	cursor-outline z-50 w-10 h-10 bg-[#FFA0014D] fixed top-0 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full"></div></>)
}
export default CustomCursor