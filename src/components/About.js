import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MediaQuery from 'react-responsive';

class About extends Component {

  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 501px)">
          <div className="AboutContainer">
            <div id="aboutText">
              <p>A Virginian at heart, I moved to NYC after graduating from <a href="https://www.wm.edu/" target="_blank" rel="noopener noreferrer">William & Mary</a>, a small liberal arts school in Williamsburg, VA. While working as a project management analyst, I tried coding for the first time. Soonafter, I quit my job and applied to the <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron School</a> to pursue learning to code fulltime. For more info, head over to <a href="https://linkedin.com/in/shelby-scalia" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>.</p>
              <p>Having completed Flatiron's 15-week <a href="https://flatironschool.com/career-courses/coding-bootcamp/" target="_blank" rel="noopener noreferrer">Immersive Software Engineering Bootcamp</a>, I am excited by the idea of solving challenging problems for a company in the fashion, beauty and/or e-commerce space as junior software engineer.</p>
            </div>
            <div id="aboutDownArrow">
              <div onClick={()=>this.props.portfolioClick()} className='arrow'><FontAwesomeIcon icon="caret-down"/></div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 500px)">
          <div className="AboutContainerResponsive">
            <div id="aboutTextResponsive">
              <p>A Virginian at heart, I moved to NYC after graduating from <a href="https://www.wm.edu/" target="_blank" rel="noopener noreferrer">William & Mary</a>, a small liberal arts school in Williamsburg, VA. While working as a project management analyst, I tried coding for the first time. Soonafter, I quit my job and applied to the <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer">Flatiron School</a> to pursue learning to code fulltime. For more info, head over to <a href="https://linkedin.com/in/shelby-scalia" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>.</p>
              <p>Having completed Flatiron's 15-week <a href="https://flatironschool.com/career-courses/coding-bootcamp/" target="_blank" rel="noopener noreferrer">Immersive Software Engineering Bootcamp</a>, I am excited by the idea of solving challenging problems for a company in the fashion, beauty and/or e-commerce space as junior software engineer.</p>
            </div>
          </div>
        </MediaQuery>
      </Fragment>
    )
  }
}

export default About
