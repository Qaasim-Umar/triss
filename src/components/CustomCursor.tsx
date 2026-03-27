'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const scanHoverElements = () => {
      const hoverElements = document.querySelectorAll('a, button, .card-hover, input, textarea')
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    setTimeout(scanHoverElements, 500)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} hidden md:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}
