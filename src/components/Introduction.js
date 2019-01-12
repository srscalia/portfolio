import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Introduction extends Component {
  render() {
    return (
      <div className="Introduction">
        — hi, my name is shelby. <br/>I'm full stack developer living in NYC.
        <div id="downArrow">
          <div class='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default Introduction
