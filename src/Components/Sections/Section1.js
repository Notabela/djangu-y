import React from 'react'
import NavComponent from '../Navbar/Navbar'

const Section1 = () => {
    const image = 'https://wonderfulengineering.com/wp-content/uploads/2016/01/Africa-Wallpaper-5.jpg'
    const cssStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div id="section_1" style={cssStyles}>
            <NavComponent />
            <p>Speak<br/>Djangu-y</p>
        </div>
    )  
}

export default Section1