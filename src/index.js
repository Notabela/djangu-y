import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'
import Page from './Components/Page/Page';
import * as serviceWorker from './serviceWorker';

const section3Right = [
    {
        imgUrl: "http://c1.staticflickr.com/1/52/125148217_fdd616657c.jpg",
        altText: "really cool image",
        text: "This is a cool text that I'm putting here, this will be replaced"
    },
    {
        imgUrl: "http://c1.staticflickr.com/1/52/125148217_fdd616657c.jpg",
        altText: "really cool image",
        text: "This is a cool text that I'm putting here, this will be replaced"
    },
    {
        imgUrl: "http://c1.staticflickr.com/1/52/125148217_fdd616657c.jpg",
        altText: "really cool image",
        text: "This is a cool text that I'm putting here, this will be replaced"
    },
    {
        imgUrl: "http://c1.staticflickr.com/1/52/125148217_fdd616657c.jpg",
        altText: "really cool image",
        text: "This is a cool text that I'm putting here, this will be replaced"
    }
]

const countDownDate = new Date("April 21 2019 12:30")
const splashImageUrl = 'https://www.createwebsite.net/wp-content/uploads/2015/09/Infinite.gif'

ReactDOM.render(<Page rightSection3Data={section3Right} 
                      countDownDate={countDownDate} 
                      splashImage={splashImageUrl}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
