import React, { Component } from 'react';
import './Info.css';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  componentDidMount() {
    var tabs = document.querySelectorAll('.image-tab');
    tabs.forEach(function(tab, index) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(tab) {
          tab.classList.remove('selected');
        });
        tab.classList.add('selected');
        this.setState({
          selectedTab: index
        });
      }.bind(this));
    }.bind(this));
  }

  render() {
    return (
      <div className="Info">
        <h4>¿En qué te puedo ayudar?</h4>
        <div className="services-row">
          <div id="personalized-consultation" className="image-tab selected"></div>
          <div id="workshops" className="image-tab"></div>
          <div id="colaborations" className="image-tab"></div> 
        </div>
        <div className="service-description">
          <div className={this.state.selectedTab === 0 ? 'show' : 'hide'}>
            <p>Consulta de nutrición personalizada online y presencial</p>
            <p>Deja que te ayude:</p>
            <ul>
              <li>Educación nutricional</li>
              <li>Sobrepeso y obesidad</li>
              <li>Nutrición clínica en distintas patologías, con especialidad en patología renal</li>
              <li>Nutrición en etapas de la vida, especialidad en tercera edad</li>
              <li>Alimentación vegetariana/vegana</li>
            </ul>
          </div>
          <div className={this.state.selectedTab === 1 ? 'show' : 'hide'}>
            <p>Formaciones y talleres</p>
            <ul>
              <li>Formaciones, charlas, talleres y conferencias, adaptando temáticas, contenido, metodología y duración a los objetivos y necesidades de la audencia.</li>
            </ul>
          </div>
          <div className={this.state.selectedTab === 2 ? 'show' : 'hide'}>
            <p>Colaboración con asociaciones, centros y empresas</p>
            <ul>
              <li>Valoración, supervisión y elaboración de menús para centros, comedores, cafeterías…</li>
              <li>Formaciones o sesiones periódicas a trabajadores y/o usuarios</li>
              <li>Asesoramiento transversal en programas de salud y mejora de hábitos</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
