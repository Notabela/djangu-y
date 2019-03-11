import React, {Component} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Container} from 'reactstrap'
import './message.scss'

export default class Message extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            messageVisible: false
        }
    }

    onMessageVisible = (isVisible) => {

        if (isVisible)
        {
            this.setState({
                messageVisible: isVisible
            })
        }
    }

    render() 
    {
        return (
            <Container fluid={true} className='message-wrapper'>
            <div id='message' className='text-center'>
                <VisibilitySensor onChange={this.onMessageVisible}>
                <p className={ this.state.messageVisible ? 'animated slideInUp' : 'hide' }>
                    Changer notre maniére díapprendre, avec une touche de technologie
                </p>
                </VisibilitySensor>
            </div>
            </Container>
        )
    }
}