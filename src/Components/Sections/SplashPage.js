import React from 'react'

const SplashPage = ({image}) => {

    const cssStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div id="splash-page" style={cssStyles}>
       
        </div>
    )
}

export default SplashPage