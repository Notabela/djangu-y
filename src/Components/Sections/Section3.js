import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Countdown from 'react-countdown-now'

const SectionInfo3 = ({imageUrl, altText, text}) => {

    const styles = {
        marginTop: '3%'
    }

    return (
        <div>
            <Row style={styles}>
                <Col sm="10">
                    <p>{text}</p>
                </Col>
                <Col sm="2">
                    <img src={imageUrl} alt={altText} width="36" height="36"/>
                </Col>
            </Row>
        </div>
    )
}

const Section3 = ({countDownFrom, imageTextBucket}) => {

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
                        <div className='section-center'>
                            <p style={{textAlign: 'center'}}>Comment ça marche ?</p>
                            { imageTextBucket.map( (content, i) => {
                                return <SectionInfo3 key={i} 
                                        imageUrl={content.imgUrl} 
                                        altText={content.altText} text={content.text} />
                            })}
                        </div>
                   </Col> 
                </Row>
            </div>
        </Container>
    )
}

export default Section3