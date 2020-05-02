import React, { Component } from 'react';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Info from './Info';
import Banner from './Banner';
import './Panel.css';

class Panel extends Component {
  render() {
    let tag = <Main></Main>;
    if (this.props.content == 'About') {
      tag = <About></About>;
    } else if (this.props.content == 'Info') {
      tag = <Info></Info>;
    } else if (this.props.content == 'Contact') {
      tag = <Contact></Contact>;
    } else if (this.props.content == 'Banner') {
      tag = <Banner></Banner>;
    }
    return (
      <div className="Panel">
        {tag}
      </div>
    );
  }
}

export default Panel;
