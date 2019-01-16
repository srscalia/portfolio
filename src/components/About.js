import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {

  render() {
    return (
      <div className="AboutContainer">
        <div id="aboutText">
          <p>Hi, it's nice to meet you!</p>
          <p>A Virginian at heart, I moved to NYC after graduating from <a href="https://www.wm.edu/">William & Mary</a>, a small liberal arts school in Williamsburg, VA. While working as a project management analyst, I started dabbling with code. It was then I realized I want to build things. Soonafter, I quit my job and applied to the <a href="https://flatironschool.com/">Flatiron School</a> to pursue learning to code fulltime.</p>
          <p>Having completed Flatiron's 15-week <a href="https://flatironschool.com/career-courses/coding-bootcamp/">Immersive Software Engineering Bootcamp</a>, I am excited by the idea of solving challenging problems for a company in the fashion and/or beauty space.</p>
        </div>
        <div id="downArrow">
          <div className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
        </div>
      </div>
    )
  }
}

export default About
