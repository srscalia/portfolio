import React, { Component } from 'react';

class Header extends Component {

  contactClick=()=>{
    window.scrollTo(0,document.body.scrollHeight)
  }

  aboutClick=()=>{
    console.log('about')
  }

  portfolioClick=()=>{
    console.log('Portfolio')
  }


  shelbyClick =()=>{
    window.scrollTo(0,-document.body.scrollHeight)
  }

  render() {
    return (
      <nav id="header">
        <div id="contact" onClick={()=>this.contactClick()}>Contact</div>
        <div id="shelby" onClick={()=>this.shelbyClick()}>SHELBY</div>
        <div id='navRight'>
          <div onClick={()=>this.aboutClick()}>About</div>
          <div onClick={()=>this.portfolioClick()}>Portfolio</div>
        </div>
      </nav>
    )
  }
}

export default Header
