import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Container, Row, Col} from 'reactstrap'
import './imagebullet.scss'


export default class ImageBullet extends Component 
{
    state = {
        bulletVisible: false
    }

    bulletVisible = false

    componentWillReceiveProps(nextProps) 
    {
        // if props are sent, meaning the splash is complete
        if (!nextProps.splashVisible)
        {
            this.setState({
                bulletVisible: this.bulletVisible
            })
        }
    }

    onBulletVisible = (isVisible) => {
        this.bulletVisible = isVisible

        if (isVisible)
        {
            this.setState({
                bulletVisible: isVisible
            })
        }
    }

    render() 
    {
        const styles = {
            marginTop: '3%'
        }

        return (
        <Container fluid={true}>
            <Row className={ this.state.bulletVisible ? 'animated fadeIn' : 'hide' } style={styles}>
                <Col xs="3" className='bare-element text-center'>
                    <img src={this.props.imageUrl} alt={this.props.altText} />
                </Col>

                <Col xs="9">
                    <VisibilitySensor onChange={this.onBulletVisible}>
                        <p className='image-bullet-topics'>{this.props.textTitle}</p>
                    </VisibilitySensor>
                    <p>{this.props.text}</p>
                </Col>
            </Row>
        </Container>
        )
    }
}
