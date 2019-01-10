import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import Introduction from './Introduction.js'
import DownArrow from './DownArrow.js'

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown)

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Introduction/>
        <DownArrow/>
      </Fragment>
    );
  }
}

export default App;
