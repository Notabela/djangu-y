import React, {Component} from 'react'
import { Row, Col, Container, Form, FormGroup, Input, Button} from 'reactstrap'
import './contact.scss'

export default class Contact extends Component
{

    submitForm = (e) => {
        e.preventDefault()
        document.querySelector("#subscribe-form").reset()
    }

    render()
    {
        return (
            <Container fluid={true} className='contact' id='contact'>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
                    <p>
                        Pour ne rien rater de l'actualié de Djanguy <br/>
                        Abonne -toi à notre newsletter
                    </p>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Form id="subscribe-form" onSubmit={this.submitForm}>
                    <FormGroup>
                        <Input type="text" placeholder="Nom Complet"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="tel" placeholder="Numéro de Téléphone"/>
                    </FormGroup>
                    <FormGroup>
                        <Button>Envoyer</Button>
                    </FormGroup>
                </Form>
                </Col>
            </Row>
            </Container>
        )
    }
}