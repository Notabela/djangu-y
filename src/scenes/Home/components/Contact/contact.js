import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLaptopCode} from 'react-icons/fa'
import {TiHeartFullOutline} from "react-icons/ti";
import { Row, Col, Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Section5 = () => {

    return (
        <Container>
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
                <p>
                Lorem Ipsum is simply dummy text of the <br/>
                printing and typesetting industry. Lorem <br/>
                Ipsum has been the industry's standard dummy <br/>
                text ever since the 1500s, when an unknown printer
                </p>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Full Name</Label>
                    <Input type="text" />
                </FormGroup>
                <FormGroup>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col className='text-center social'>
                <a className="middle-blue-font" href="https://www.facebook.com/#" title="Facebook" target="facebook"><FaFacebookF /></a>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <a className="middle-blue-font" href="https://www.twitter.com/#" title="Twitter" target="twitter"><FaTwitter /></a>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <a className="middle-blue-font" href="https://instragram.com/#" title="Instagram" target="instagram"><FaInstagram /></a>
            </Col>
        </Row>
        <Row>
            <Col className='text-center footer' >
            <p><FaLaptopCode color='blue'/> with <TiHeartFullOutline color='red'/> by notabela</p>
            </Col>
        </Row>
        </Container>
      )
}

export default Section5