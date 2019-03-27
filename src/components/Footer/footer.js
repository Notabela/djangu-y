import React from 'react'
import {FaLaptopCode, FaReact} from 'react-icons/fa'
import {Row, Container, Col} from 'reactstrap'
import './footer.scss'

const Footer = () => {

    return (
        <Container fluid={true} className='footer text-center'>
            <Row id="footer-blurb">
                <Col>
                    <p>L'éducation par les milléniaux et pour les milléniaux</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='notabela'><FaLaptopCode color='blue'/> avec <span id='react-icon'><FaReact color='#00d8ff'/></span> par notabela, icônes par <a href="https://icons8.com">Icons8</a></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer