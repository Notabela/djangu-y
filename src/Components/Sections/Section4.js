import React from 'react'
import {Container, Row, Col} from 'reactstrap'

const SectionInfo4 = ({imageUrl, altText, text}) => {

    const styles = {
        marginTop: '3%'
    }

    return (
        <div>
            <Row style={styles}>
                <Col sm="2">
                    <img src={imageUrl} alt={altText} width="64" height="64"/>
                </Col>

                <Col sm="10">
                    <p>{text}</p>
                </Col>
            </Row>
        </div>
    )
}

const Section4 = ({imageTextBucket}) => {
    return (
        <Container fluid={true}>
            <div id="section_4">
                <div className='section-center'>
                    <p style={{textAlign: 'center'}}>
                        Some General Information will go here<br />
                        Some General Information will go here<br/>
                        Some General Information will go here
                    </p>

                    { imageTextBucket.map( (content, i) => {
                        return <SectionInfo4 key={i} 
                                imageUrl={content.imgUrl} 
                                altText={content.altText} text={content.text} />
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Section4