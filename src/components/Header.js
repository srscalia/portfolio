import React, { Component } from 'react';

class Header extends Component {

  contactClick=()=>{
    console.log('hi')
  }


  render() {
    return (
      <nav id="header">
        <div id="contact" href="" onClick={()=>this.contactClick()}>Contact</div>
        <div id="shelby">SHELBY</div>
        <div id='navRight'>
          <div href="">About</div>
          <div href="">Portfolio</div>
        </div>
      </nav>
    )
  }
}

export default Header
