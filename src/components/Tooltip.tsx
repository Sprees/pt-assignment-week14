import React, { useState } from 'react'

type TooltipProps = {
    message: string
    children: React.ReactNode
}

function Tooltip({ message, children }: TooltipProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    function handleMouseEnter() {
        setIsVisible(true)
    }

    function handleMouseLeave() {
        setIsVisible(false)
    }

    return (
        <div className="relative inline-block">
            <div
                className="cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {isVisible && (
                <div className="min-w-40 text-center absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm -right-65 top-1.5 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300">
                    {message}
                </div>
            )}
        </div>
    )
}

export default Tooltip
