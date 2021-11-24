import React, {Component} from 'react'
import './App.css'


class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    // getTimeUntil(deadline){
    //     const time = Date.parse(deadline) - Date.parse(new Date())
    // }

    render (){
        return (
        <div>
            <div className="App-days"> {this.state.days} days </div>
            <div className="App-hours"> {this.state.hours} hours</div>
            <div className="App-minutes"> {this.state.minutes} minutes</div>
            <div className="App-seconds"> {this.state.seconds} seconds</div> 
        </div>
        )
    }
}

export default Clock 