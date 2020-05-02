import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { buildUrl } from 'react-instafeed';
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    // const instagramUrl = buildUrl(options)



    return (
      <div className="Contact">
        <div className="column social">
          <h3>¡Sígueme y no dudes en contactar conmigo!</h3>
          <FontAwesomeIcon icon={faEnvelope}/>
          <FontAwesomeIcon icon={faLinkedin}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faResearchgate}/>
        </div>
        {/* <div className="column ig-feed">
          <h3>IG Feed</h3>
        </div> */}
      </div>
    );
  }
}

export default Contact;
