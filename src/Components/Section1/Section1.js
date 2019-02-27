import React from 'react'
import './Section1.css'

const Section1 = () => {
    const image = 'http://amediaagency.com/app/uploads/2016/06/MCF_Youth_Think_Tank_Uganda_Rwanda_2016_2791-2.jpg'
    const cssStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="section" id="section_1" style={cssStyles}>
            <p>Speak<br/>Djangu-y</p>
        </div>
    )

}

export default Section1