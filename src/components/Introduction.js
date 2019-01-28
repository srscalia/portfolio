import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Introduction extends Component {

  render() {
    return (
      <div className="IntroductionContainer">
        <center className="animated slideInLeft slow">— hi, my name is shelby. <br/>I'm a full stack developer living in NYC.</center>
        <div id="downArrow">
          <div onClick={()=>this.props.aboutClick()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default Introduction
