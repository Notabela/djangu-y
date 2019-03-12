import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import FlipClock from '../../../../components/FlipClock/flipclock'
import './about.scss'

export default class About extends Component
{

    render()
    {
        return (
            <Container fluid={true} id="about">
                <Container fluid={true}>
                    <Row>
                        <Col id="about-float-text" className='text-center'>
                            <p>Comment ça marche?</p>
                        </Col>
                    </Row>
                    <Row id='about-countdown' className='text-center'>
                        <Col>
                            <p id='countdown-text'>Jours restant avant<br/>
                            le lancement de l’application
                            </p>
                            <FlipClock dateString={this.props.countDownFrom}/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center' id='about-grid'>
                    <Row>
                        <Col xs="6" className="about-box about-1-box">
                            <p className="about-number">1</p>
                            <p>Télécharger l'application</p>
                        </Col>
                        <Col xs="6" className="about-box about-2-box">
                            <p className="about-number">2</p>
                            <p>Payer les frais d'accés</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="6" className="about-box about-3-box">
                            <p className="about-number">3</p>
                            <p>Choisir son cours</p>
                        </Col>
                        <Col xs="6" className="about-box about-4-box">
                            <p className="about-number">4</p>
                            <p>Suivre en direct le cours et revoir le <br/>
                            même cours aprés la diffusion en direct</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}