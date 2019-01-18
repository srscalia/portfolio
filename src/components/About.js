import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {

  scroll = ()=>{
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="AboutContainer">
        <div id="aboutText">
          <p>Hi, nice to meet you!</p>
          <p>A Virginian at heart, I moved to NYC after graduating from <a href="https://www.wm.edu/" target="_blank" rel="noopener noreferrer">William & Mary</a>, a small liberal arts school in Williamsburg, VA. While working as a project management analyst, I started dabbling with code. It was then I realized I want to build things. Soonafter, I quit my job and applied to the <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron School</a> to pursue learning to code fulltime. For more details on my professional and academic background, head over to <a className="contactIcon" href="https://linkedin.com/in/shelby-scalia" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>.</p>
          <p>Having completed Flatiron's 15-week <a href="https://flatironschool.com/career-courses/coding-bootcamp/" target="_blank" rel="noopener noreferrer">Immersive Software Engineering Bootcamp</a>, I am excited by the idea of solving challenging problems for a company in the fashion and/or beauty space.</p>
          <p>I am seeking full-time employment as junior software engineer.</p>
        </div>
        <div id="aboutDownArrow">
          <div onClick={()=>this.scroll()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default About
