import React, {Component} from 'react'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'
import '../Sections/Sections.css'

class Page extends Component
{
    // data to be rendered in the right of section 3
    constructor(props)
    {
        super(props)

        this.state = {
            rightSection3Data: props.rightSection3Data,
            countDownDate: props.countDownDate
        }
    }

    render()
    {
        return (
            <div>
                <Section1 />
                <Section2 />
                <Section3 countDownFrom={this.props.countDownDate} 
                          imageTextBucket={this.props.rightSection3Data}/>
                <Section4 imageTextBucket={this.props.rightSection3Data}/>
                <Section5 />
            </div>
        )
    }
}

export default Page