import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div>
          <FontAwesomeIcon icon='envelope' />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'medium']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>
      </div>
    )
  }
}

export default Contact
