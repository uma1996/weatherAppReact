import React, { Component } from 'react';
import './temperature.css'

class Temperature extends Component{
    render(){
        return (
            <div class="banner-left">
            <div class="column1">
                <img src="images/cloudy.png" id="cond-img" alt="images"></img>
            </div>
            <div class="column2" id="temp-disp">
                <div class="col2_1">
                    <span id="temp">21</span>
                </div>
                 <div class="col2_2">
                    <a id="cel">&#8451;</a>|
                    <a id="fah">&#8457;</a>
                </div> 
            </div>
        </div>

        )
    }
}

export default Temperature