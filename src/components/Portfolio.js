import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Portfolio extends Component {

  scroll = ()=>{
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="PortfolioContainer">
        <div id="aboutDownArrow">
          <div onClick={()=>this.scroll()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default Portfolio
