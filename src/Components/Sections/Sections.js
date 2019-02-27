import React from 'react'
import NavComponent from '../Navbar/Navbar'
import './Sections.css'

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
            <NavComponent />
            <p>Speak<br/>Djangu-y</p>
        </div>
    )  
}

const Section2 = () => {
    return (
        <div className="section" id="section_2">
            <p className="animated bounceInUp">Some Cool Animating Information will go Here</p>
        </div>
    )
}

const Sections = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
        </div>
    )
}

export default Sections