import React from 'react'
import NavComponent from '../Navbar/Navbar'
import {Container, Row, Col} from 'reactstrap'
import Countdown from 'react-countdown-now'
import './Sections.css'

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

const Section2 = () => {
    return (
        <Container fluid={true}>
            <div id="section_2">
                <p>
                Some Cool Animating Information will go Here
                Some Cool Animating Information will go Here
                Some Cool Animating Information will go Here
                </p>
            </div>
        </Container>
    )
}

const Section3 = ({countDownFrom}) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <div id="countdown">
            <p>Jours restant avant le lancement de l’application</p>
            <br></br>
            <p>{days} days, {hours} hours, {minutes} minutes and {seconds} seconds</p>
            </div>
        )
    }

    const csStyleLeft = {
        background: 'yellow'
    }
    
    const csStyleRight = {
        background: 'orange'
    }

    return (
        <Container fluid={true}>
            <div id="section_3">
                <Row>
                   <Col id='section-3-left' style={csStyleLeft} sm="6">
                   <Countdown date={countDownFrom} renderer={renderer}/>
                   </Col>

                   <Col id='section-3-right' style={csStyleRight} sm="6">
                   Some different data here
                   </Col> 
                </Row>
            </div>
        </Container>
    )
}

const Sections = () => {

    const countDownDate = new Date("April 21 2019 12:30");
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 countDownFrom={countDownDate}/>
        </div>
    )
}

export default Sections