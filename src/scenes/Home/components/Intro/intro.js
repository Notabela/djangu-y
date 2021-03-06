import React from 'react'
import NavComponent from '../../../../components/Nav/nav'
import './intro.scss'

const Intro = () => {
    const image = 'https://i.imgur.com/KcpM22Y.png?1'
    const cssStyles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    }

    return (
        <div className='intro-wrapper'>
            <NavComponent />
            <div id='intro' style={cssStyles}>
                <div id='topic' className="shadows"><span>D</span><span>j</span><span>a</span><span>n</span><span>g</span><span>u</span><span>-</span><span style={{color: '#379683'}}>y</span></div>
                {/* <div id='topic'><p>Djangu-<span style={{color: '#379683'}}>Y</span></p></div> */}
            </div>
            <div id='intro-courses'>
                <p><strong>Les cours prochainement disponibles:</strong></p>
                <p className='text-center bare-element'> &nbsp; Français &nbsp; Philo &nbsp; H-G &nbsp; Maths &nbsp; SVT &nbsp; PC &nbsp; Anglais</p>
            </div>
        </div>
    )  
}

export default Intro