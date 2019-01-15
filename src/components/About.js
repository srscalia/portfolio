import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {

  render() {
    return (
      <div className="AboutContainer">
        <div id="aboutText">
        </div>
        <div id="downArrow">
          <div className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default About
