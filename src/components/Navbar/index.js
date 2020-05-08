import React, { Component } from 'react';
import logo from '../../assets/logo_no_name.png';
import './Navbar.css';

class Navbar extends Component {

    componentDidMount() {
        const navElement = document.querySelector('nav');
        this.setScrollingListener = this.setScrollingListener.bind(navElement);
        this.setScrollingListener('li .navbar-logo', 'div.Main');
        this.setScrollingListener('li.info-button', 'div.Info');
        this.setScrollingListener('li.about-button', 'div.About');
        this.setScrollingListener('li.contact-button', 'div.Contact');
    }

    render() {
        return (
            <nav className='fixed-nav'>
                <ul>
                    <li className='main-button'>
                        <img className='navbar-logo' src={logo} />
                    </li>
                    <li className='info-button'>Servicios</li>
                    <li className='about-button'>Sobre mí</li>
                    <li className='contact-button'>Contacto</li>
                </ul>
            </nav>
        );
    }

    setScrollingListener(liElement, scrollToElement) {
        var li = document.querySelector(liElement);
        li.addEventListener('click', function(){
            var element = document.querySelector(scrollToElement);            
            window.scrollTo({ top: element.offsetTop - this.offsetHeight, 
                              behavior: 'smooth' }); 
        }.bind(this));
    }
}

export default Navbar;
  
  