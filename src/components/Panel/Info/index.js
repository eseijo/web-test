import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
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

  getContent(selectedTab) {
    if (selectedTab === 0) {
      return <div id='personalized-consultation-content' className='content'>
              <p>Consulta de nutrición personalizada online y presencial</p>
              <CardDeck>
                <Card className="bg-dark text-white">
                  <Card.Img src='https://www.efesalud.com/files/2017/12/nutriplatouno-660x330.jpg' alt='Card image' />
                  <Card.ImgOverlay>
                    <Card.Title>Educación nutricional</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src='https://www.kernpharma.com/sites/default/files/styles/blog_full/public/blog/Obesidad%20y%20sobrepeso.jpg' alt='Card image' />
                  <Card.ImgOverlay>
                    <Card.Title>Sobrepeso y obesidad</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src='http://nefrouros.net/wp-content/uploads/2019/01/Sin-t%C3%ADtulo-1.png' alt='Card image' />
                  <Card.ImgOverlay>
                    <Card.Title>Nutrición clínica en distintas patologías</Card.Title>
                    <Card.Text>Especialidad en patología renal</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </CardDeck>
              <CardDeck className="card-deck-bottom">
                <Card className="bg-dark text-white">
                  <Card.Img src='https://www.msolucionamoncloa.com/wp-content/uploads/2015/04/moncloa2.jpg' alt='Card image' />
                  <Card.ImgOverlay>
                    <Card.Title>Nutrición en etapas de la vida</Card.Title>
                    <Card.Text>Especialidad en tercera edad</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src='https://www.mariateresamoratalla.com/wp-content/uploads/2019/03/dieta-vegana-y-vegetariana-1024x534.jpg' alt='Card image' />
                  <Card.ImgOverlay>
                    <Card.Title>Alimentación vegetariana/vegana</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </CardDeck>
            </div>;
    }

    if (selectedTab === 1) {
      return <div id='workshops-content' className='content'>
              <p>Formaciones y talleres</p>
              <ul>
                <li>Formaciones, charlas, talleres y conferencias, adaptando temáticas, contenido, metodología y duración a los objetivos y necesidades de la audencia.</li>
              </ul>
            </div>;
    }

    if (selectedTab === 2) {
      return <div id='colaborations-content' className='content'>
              <p>Colaboración con asociaciones, centros y empresas</p>
              <ul>
                <li>Valoración, supervisión y elaboración de menús para centros, comedores, cafeterías…</li>
                <li>Formaciones o sesiones periódicas a trabajadores y/o usuarios</li>
                <li>Asesoramiento transversal en programas de salud y mejora de hábitos</li>
              </ul>
            </div>;
    }
  }

  render() {
    return (
      <div className='Info'>
        <div className='services-row'>
          <div id='personalized-consultation' className='image-tab selected'></div>
          <div id='workshops' className='image-tab'></div>
          <div id='colaborations' className='image-tab'></div> 
        </div>
        <div className='service-description'>
          { this.getContent(this.state.selectedTab) }
        </div>
      </div>
    );
  }
}

export default Info;
