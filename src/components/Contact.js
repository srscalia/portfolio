import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  scroll = ()=>{
    window.scrollBy({ top:-1000, left: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div className="contactContainer">
        <div id="iconContainer">
          <FontAwesomeIcon icon='envelope' />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'medium']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>
        <div id="upArrow">
          <div onClick={()=>this.scroll()} className='arrow'>
            <FontAwesomeIcon icon="caret-up"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
