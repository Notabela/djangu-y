import React from 'react'
import './splash.scss'

const Splash = ({isVisible}) => {
    const stop1 = {
        stopColor: '#FF56A1',
        stopOpacity: '1'
    }

    const stop2 = {
        stopColor: '#FF9350',
        stopOpacity: '1'
    }

    return (
        <div id="splash-page" className={!isVisible ? 'fadeOut' : ''}>
            <svg>
            <g>
                <path d="M 50,100 A 1,1 0 0 1 50,0"/>
            </g>
            <g>
                <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
            </g>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={stop1} />
                <stop offset="100%" style={stop2} />
                </linearGradient>
            </defs>
            </svg>
        </div>
    )
}

export default Splash