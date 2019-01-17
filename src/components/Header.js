import React, { Component } from 'react';

class Header extends Component {

  contactClick=()=>{
    window.scrollTo(0,document.body.scrollHeight)
  }

  shelbyClick =()=>{
    window.scrollTo(0,-document.body.scrollHeight)
  }

  render() {
    return (
      <nav id="header">
        <div className="headerHover" id="contact" onClick={()=>this.contactClick()}>Contact</div>
        <div className="headerHover" id="shelby" onClick={()=>this.shelbyClick()}>SHELBY</div>
        <div id='navRight'>
          <div onClick={()=>this.props.aboutClick()} className="headerHover">About</div>
          <div className="headerHover" onClick={()=>this.props.portfolioClick()}>Portfolio</div>
        </div>
      </nav>
    )
  }
}

export default Header
