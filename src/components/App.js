import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Introduction from './Introduction.js'
import About from './About.js'
import Contact from './Contact.js'

import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCaretDown as CaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp as CaretUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(CaretDown, CaretUp, faTwitter, faMedium, faLinkedin, faGithub, faEnvelope )


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Introduction/>
        <About/>
        <Contact/>
      </Fragment>
    );
  }
}

export default App;
