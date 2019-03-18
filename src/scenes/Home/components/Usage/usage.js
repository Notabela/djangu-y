import React, {Component} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Container, Row, Col} from 'reactstrap'
import './usage.scss'

const ImageBullet = ({imageUrl, altText, textTitle, text}) => {

    const styles = {
        marginTop: '3%'
    }

    const onMessageVisible = (isVisible) => {
        this.messageVisible = isVisible

        if (isVisible)
        {
            this.setState({
                messageVisible: isVisible
            })
        }
    }

    return (
        <Container fluid={true}>
            <Row style={styles}>
                <Col xs="3" className='bare-element'>
                    <img src={imageUrl} alt={altText} />
                </Col>

                <Col xs="9">
                    <VisibilitySensor onChange={_=>_}>
                        <p className='image-bullet-topics'><strong>{textTitle}</strong></p>
                    </VisibilitySensor>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default class Usage extends Component
{

    render()
    {
        return (
            <Container fluid={true}>
            <div id="usage">
                <div className='section-center'>
                    <h4 className='text-center'>
                        Notre approche unique: apprendre n’importe où, n’importe quand
                    </h4>
                    <div className='image-bullets'>
                        { this.props.imageData.map( (content, i) => {
                            return <ImageBullet key={i} 
                                    imageUrl={content.imgUrl} 
                                    altText={content.altText}
                                    textTitle={content.textTitle}
                                    text={content.text} />
                        })}
                    </div>
                </div>
            </div>
            </Container>
        )
    }
}