import React, { Component } from 'react';

class DayTile extends Component{
    render(){
    return (
        <div className="col-xs-3" id="grid1" >
            <p id="fday1">sun</p>
            <img src="images/cloudy.png" id="cond-img" alt="images"></img>
            <p><span id="high1">27</span><sup>o</sup><span id="low1">57</span><sup>o</sup></p>
        </div>
    );
}
}

export default DayTile;

