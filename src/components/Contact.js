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
          <a className='contactIcon' href = "mailto: shelby.scalia@gmail.com">
            <FontAwesomeIcon icon='envelope' />
          </a>
          <a className='contactIcon' href='https://twitter.com/shelby_scalia' target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a className='contactIcon' href='https://linkedin.com/in/shelby-scalia' target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
          </a>
          <a className='contactIcon' href='https://github.com/srscalia' target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a className='contactIcon' href="https://medium.com/@shelby.scalia" target="_blank">
            <FontAwesomeIcon icon={['fab', 'medium']} />
          </a>
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
