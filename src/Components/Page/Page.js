import React, {Component} from 'react'
import SplashPage from '../Sections/SplashPage'
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
            countDownDate: props.countDownDate,
            splashImage: props.splashImage,
            showSplash: true,
        }

        setTimeout( () => {
            this.setState({
               showSplash: false,
            })
        }, 1000)
    }

    render()
    {
        if (this.state.showSplash)
        {
            return <div id="splash-page-wrapper"><SplashPage image={this.state.splashImage}/></div>

        } else {
            return (
                <div className='fade-in page'>
                    <Section1 />
                    <Section2 />
                    <Section3 countDownFrom={this.state.countDownDate} 
                            imageTextBucket={this.state.rightSection3Data}/>
                    <Section4 imageTextBucket={this.state.rightSection3Data}/>
                    <Section5 />
                </div>
            )
        }
    }
}

export default Page