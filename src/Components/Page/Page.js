import React, {Component} from 'react'
import NavComponent from '../Navbar/Navbar'
import Section from '../Section/Section'

class Page extends Component
{
    render()
    {
        return (
            <div>
                <NavComponent />
                <Section />
            </div>
        )
    }
}

export default Page