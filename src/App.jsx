import React, {Component} from 'react'
import './App.css'
import Clock from "./Clock"
import background from './CongratsBackground.jpg'

class App extends Component { 
    constructor (props) {
        super(props)
        this.state = {
            deadline: 'January 1, 2022',
            newDeadline: ''
        }
    }

    changeDeadline(e){
        this.setState({deadline: this.state.newDeadline})
        
    }

   



    render () {
        return (
            <div className="App" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="App-title"> <b>Countdown to {this.state.deadline}</b> </div>
            <Clock deadline={this.state.deadline}/>
            <div>
                <input type= "text" placeholder='Enter New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
                <br/>
                <button type="submit" class="btn btn btn-warning btn-lg" onClick={()=> this.changeDeadline()}> Submit</button>
                {/* <br/>
                <button type="reset" class="btn btn btn-primary btn-lg" onClick={(e)=> this.handleReset(e)}>Reset</button> */}
            </div>
            </div>
        )
    }
}

export default App 