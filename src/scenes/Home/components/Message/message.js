import React, {Component} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Container} from 'reactstrap'
import './message.scss'

export default class Message extends Component
{
    constructor(props)
    {
        super(props)

        // to trigger message showing and hiding
        this.state = {
            messageVisible: false
        }

        // to track whether the message is visible or not
        this.messageVisible = false
    }

    componentWillReceiveProps(nextProps) 
    {
        // if props are sent, meaning the splash is complete
        if (!nextProps.splashVisible)
        {
            this.setState({
                messageVisible: this.messageVisible
            })
        }
    }

    onMessageVisible = (isVisible) => {
        this.messageVisible = isVisible

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
                Changer votre manière d'apprendre <br/>
		            avec une touche de technologie
                </p>
                </VisibilitySensor>
            </div>
            </Container>
        )
    }
}