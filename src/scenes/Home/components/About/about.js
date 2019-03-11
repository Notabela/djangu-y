import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Countdown from 'react-countdown-now'
import './about.scss'


const Section3 = ({countDownFrom, imageTextBucket}) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <div className="countdown">
                <p>Some text here</p>
                <p>{days}:{hours}:{minutes}:{seconds}</p>
            </div>
        )
    }
    

    const yellowBox = {
        background: 'yellow',
        paddingTop: '5%'
    }
    
    const orangeBox = {
        background: 'orange',
        paddingTop: '5%'
    }

    return (
        <Container fluid={true}>
            <div id="section_3">
                <div id="section-3-float-text" className='text-center'>
                    <p>Random Floating P tag</p>
                </div>
                <div id='section-3-countdown' className='text-center'>
                    <Countdown date={countDownFrom} renderer={renderer}/>
                </div>
                <div className='text-center' id='section-3-grid'>
                <Row>
                    <Col xs="6" style={orangeBox}>
                        <p>1</p>
                        <p>some information</p>
                    </Col>
                    <Col xs="6" style={yellowBox}>
                        <p>2</p>
                        <p>some information</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6" style={yellowBox}>
                        <p>3</p>
                        <p>some information</p>
                    </Col>
                    <Col xs="6" style={orangeBox}>
                        <p>4</p>
                        <p>some information</p>
                    </Col>
                </Row>
                </div>
            </div>
        </Container>
    )
}

export default Section3