import React, {Component} from 'react'
import {Container} from 'reactstrap'
import Splash from '../../components/Splash/splash'
import Intro from './components/Intro/intro'
import Message from './components/Message/message'
import Usage from './components/Usage/usage'
import Contact from './components/Contact/contact'
import Footer from '../../components/Footer/footer'
import About from './components/About/about'
import './home.scss'
// import Section1 from '../Sections/Section1'
// import Section2 from '../Sections/Section2'
// import Section3 from '../Sections/Section3'
// import Section4 from '../Sections/Section4'
// import Section5 from '../Sections/Section5'
// import '../Sections/Sections.css'

export default class Home extends Component
{
    // data to be rendered in the right of section 3
    constructor(props)
    {
        super(props)

        this.state = {
            // rightSection3Data: props.rightSection3Data,
            // countDownDate: props.countDownDate,
            // splashImage: props.splashImage,
            showSplash: true,
            childVisibility: true
        }

        this.imageData = [
            {
                imgUrl: 'https://i.imgur.com/lDWgCHO.png',
                altText: 'Devices',
                textTitle: 'Des cours de renforcement diffusés en direct',
                text: 'Le visionnage est possible sur votre smartphone, tablette ou ordinateur.'
            },
            {
                imgUrl: 'https://i.imgur.com/6wIb4Zr.png',
                altText: 'Messages',
                textTitle: 'Intéraction renforcée',
                text: 'Tchats en temps réel et notifications sur les mises à jour liées au cours.'
            },
            {
                imgUrl: 'https://i.imgur.com/E9aMUBx.png',
                altText: 'Replay',
                textTitle: 'Fonctionnalité Replay',
                text: 'Les vidéos des cours filmés sont toujours disponibles sur notre plateforme, 15 jours aprés la diffusion en directe.'
            },
            {
                imgUrl: 'https://i.imgur.com/bGBSGSZ.png',
                altText: 'WiFi',
                textTitle: 'La technologie diffusion en continu à plusieurs débits',
                text: "Grâce à cette fonctionnalité la vitesse internet des participants n'a pas d'impact sur la qualité de la vidéo visionnée."
            },
            {
                imgUrl: 'https://i.imgur.com/2dTGgZH.png',
                altText: 'Coins',
                textTitle: 'Flexi-paiement',
                text: 'Et oui, les frais mensuels (10 000 FCFA) sont payables en quatre versements (versement minimum de 500 FCFA).'
            },
            {
                imgUrl: 'https://i.imgur.com/U0HneKb.png',
                altText: 'debit',
                textTitle: 'Payer avec Orange Money ou Waari',
                text: 'Pour avoir accés aux cours, les frais mensuels sont payables avec Orange Money ou Waari.'
            }
        ]

        setTimeout( () => {
            this.setState({
                showSplash: false,
            })
        }, 2000)
    }

    render()
    {
        return (
            <div>
            <Splash isVisible={this.state.showSplash}/>
            <Container fluid={true} className='page'>
                <Intro />
                <Message splashVisible={this.state.showSplash}/>
                <Usage imageData={this.imageData} splashVisible={this.state.splashVisible}/>
                <About countDownFrom='April 28, 2019' />
                <Contact/>
                <Footer/>
            </Container>
            </div>
        )
    }
}