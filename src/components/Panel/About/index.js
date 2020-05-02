import profile_img from '../../../assets/profile.jpg';
import profile_alt_img from '../../../assets/profile_alt.jpg';
import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h4>¿Que quién soy?</h4>
        <div className="columns">
          <div className="column">
            <img class="profile" src={profile_alt_img}/>
          </div>
          <div className="column">
            <p>Mi nombre es Laura Regueiro Folgueira, soy dietista-nutricionista, realicé mis estudios de Grado en
  Nutrición Humana y Dietética en la universidad de Santiago de Compostela y desde entonces no he dejado
  de formarme en este mundo de la nutrición que me apasiona. Soy especialista en Obesidad y Nutrición
  clínica, entre otros cuento con amplia experiencia en patología renal.</p>
          </div>
        </div>
        <div className="columns">
            <div className="column">
              <ul>
                <li>
                  <p>Me apasiona y me motiva ayudar a la gente a mejorar su alimentación, mostrándoles que se puede disfrutar de la comida de forma saludable.</p>
                </li>
                <li>
                  <p>Creo y apuesto en mi trabajo diario por la Educación Nutricional como la clave para mejorar hábitos.</p>
                </li>
                <li>
                  <p>Además del trabajo en consulta, ayudo a mejorar la alimentación de la gente realizando formaciones, charlas, talleres, revisión de menús, asesoramiento a empresas, industria...</p>
                </li>
                <li>
                  <p>Para más información sobre mí o mi formación búscame en <a href="https://www.linkedin.com/in/laura-regueiro-folgueira-25685bab">LinkedIn</a>.</p>
                </li>
              </ul>
            </div>
          <div className="column">
            <img class="profile" src={profile_img}/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
