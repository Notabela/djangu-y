import React from 'react'
import {Container} from 'reactstrap'
import ImageBullet from '../../../../components/ImageBullet/imagebullet'
import './usage.scss'

const Usage = ({imageData, splashVisible}) => {

    return (
        <Container fluid={true}>
        <div id="usage">
            <div className='section-center'>
                <h4 className='text-center'>
                    Notre approche unique: apprendre n’importe où, n’importe quand
                </h4>
                <div className='image-bullets'>
                    { imageData.map( (content, i) => {
                        return <ImageBullet key={i}
                                splashVisible={splashVisible} 
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

export default Usage