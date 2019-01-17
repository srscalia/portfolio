import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Introduction extends Component {

  scroll = ()=>{
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="IntroductionContainer">
        <center>— hi, my name is shelby. <br/>I'm a full stack developer living in NYC.</center>
        <div id="downArrow">
          <div onClick={()=>this.scroll()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default Introduction
