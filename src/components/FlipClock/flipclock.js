//adopted from https://codepen.io/Libor_G/pen/JyJzjb
//React Flip Clock by Libor Gabrhel
import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './flipclock.sass'

const AnimatedCard = ({ animation, digit }) => {

    return(
      <div className={`flipCard ${animation}`}>
        <span>{digit}</span>
      </div>
    )

}
  
// function component
const StaticCard = ({ position, digit }) => {
    return(
        <div className={position}>
        <span>{digit}</span>
        </div>
    )
}
  
  // function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {	

    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit + 1;

    // add zero
    if ( currentDigit < 10 ) {
        currentDigit = `0${currentDigit}`;
    } 
    
    if ( previousDigit < 10 ) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle 
        ? previousDigit 
        : currentDigit;
    const digit2 = !shuffle 
        ? previousDigit 
        : currentDigit;

    // shuffle animations
    const animation1 = shuffle 
        ? 'fold' 
        : 'unfold';
    const animation2 = !shuffle 
        ? 'fold' 
        : 'unfold';

    return(
        <div className={'flipUnitContainer'}>
        <StaticCard 
            position={'upperCard'} 
            digit={currentDigit} 
            />
        <StaticCard 
            position={'lowerCard'} 
            digit={previousDigit} 
            />
        <AnimatedCard 
            digit={digit1}
            animation={animation1}
            />
        <AnimatedCard 
            digit={digit2}
            animation={animation2}
            />
        <div className="card-label">
        <p>{unit}</p>
        </div>
        </div>
    )
}
  
  // class component
export default class FlipClock extends React.Component {
      
    constructor(props) 
    {
          super(props);

          // let original date be the this.props.original Date as string

          this.state = {
              weeks: 0,
              weeksShuffle: true,
              days: 0,
              daysShuffle: true,
              hours: 0,
              hoursShuffle: true,
              minutes: 0,
              minutesShuffle: true,
              seconds: 0,
              secondsShuffle: true
          };
      }
    
      componentDidMount() {
          this.timerID = setInterval(
              () => this.updateTime(),
              50
          );
      }
    
      componentWillUnmount() {
          clearInterval(this.timerID);
      }

      // convert milliseconds to days, hours, minutes and seconds
      dhm = (ms) => {
        const days = Math.floor(ms / (24*60*60*1000));
        const daysms=ms % (24*60*60*1000);
        const hours = Math.floor((daysms)/(60*60*1000));
        const hoursms=ms % (60*60*1000);
        const minutes = Math.floor((hoursms)/(60*1000));
        const minutesms=ms % (60*1000);
        const seconds = Math.floor((minutesms)/(1000));

        return {days, hours, minutes, seconds}
    }

    wdhms = (mil) => {
        let seconds = (mil / 1000) | 0;
        mil -= seconds * 1000;

        let minutes = (seconds / 60) | 0;
        seconds -= minutes * 60;

        let hours = (minutes / 60) | 0;
        minutes -= hours * 60;

        let days = (hours / 24) | 0;
        hours -= days * 24;

        let weeks = (days / 7) | 0;
        days -= weeks * 7;

        return {weeks, days, hours, minutes, seconds}
    }
    
      updateTime = () => {
          // get current date in milliseconds
          let ms = (new Date(this.props.dateString)) - (new Date())
          if ( ms < 0)
          {
              // time has elasped, no need to move forward
              // clear the interval and let the user know that we're done
              clearInterval(this.timerID)
              ms = 0
          }

          const time = this.wdhms(ms)
          // set time units
          const weeks = time.weeks
          const days = time.days;
          const hours = time.hours;
          const minutes = time.minutes;
          const seconds = time.seconds;

          // on hour chanage, update hours and shuffle state
          if( weeks !== this.state.weeks) {
            const weeksShuffle = !this.state.weeksShuffle;
            this.setState({
                weeks,
                weeksShuffle
            });
          }

          if( days !== this.state.days) {
            const daysShuffle = !this.state.daysShuffle;
            this.setState({
                days,
                daysShuffle
            });
          }

          if( hours !== this.state.hours) {
              const hoursShuffle = !this.state.hoursShuffle;
              this.setState({
                  hours,
                  hoursShuffle
              });
          }
          // on minute chanage, update minutes and shuffle state
          if( minutes !== this.state.minutes) {
              const minutesShuffle = !this.state.minutesShuffle;
              this.setState({
                  minutes,
                  minutesShuffle
              });
          }
          // on second chanage, update seconds and shuffle state
          if( seconds !== this.state.seconds) {
              const secondsShuffle = !this.state.secondsShuffle;
              this.setState({
                  seconds,
                  secondsShuffle
              });
          }
      }
    
      render() {
      
      // state object destructuring
    const { 
        weeks,
        days,
        hours, 
        minutes, 
        seconds,
        weeksShuffle,
        daysShuffle,
        hoursShuffle, 
        minutesShuffle, 
        secondsShuffle 
      } = this.state;
          
      return(
              <Container fluid={true} className="flipClock">
                <Row className='text-center justify-content-center'>
                <Col xs="1">
                  <FlipUnitContainer 
                      unit={'sems'}
                      digit={weeks} 
                      shuffle={weeksShuffle} 
                      />
                </Col>
                <Col xs="1">
                  <FlipUnitContainer 
                      unit={'jours'}
                      digit={days} 
                      shuffle={daysShuffle} 
                      />
                </Col>
                <Col xs="1">             
                  <FlipUnitContainer 
                      unit={'heures'}
                      digit={hours} 
                      shuffle={hoursShuffle} 
                      />
                </Col>
                <Col xs="1">
                  <FlipUnitContainer 
                      unit={'mins'}
                      digit={minutes} 
                      shuffle={minutesShuffle} 
                      />
                </Col>
                <Col xs="1">
                  <FlipUnitContainer 
                      unit={'secs'}
                      digit={seconds} 
                      shuffle={secondsShuffle} 
                      />
                </Col>
                </Row>
              </Container>
          );
      }
  }