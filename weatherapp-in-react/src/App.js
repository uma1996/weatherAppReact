import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cityinput from './components/city-input/city-input';
import Summary from './components/summary/summary';
import Temperature from './components/temperature/temperature';
import Tpw from './components/tpw/tpw';
import Chart from './components/chart/chart';
import DayTile from './components/day-tile/day-tile';

class App extends Component {
  render() {
    return (
       <div className="App">
       <Cityinput />
       <div className="main-container" id="main-con">
       <Summary />
       <div>
         <Temperature />
         <div>
           <Tpw />
           </div>
         </div>
         <div>
             <Chart />
             </div>
             <div>
         <DayTile />
         </div>
       </div>
       
       </div>


    );
  }
}

export default App;
