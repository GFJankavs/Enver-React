import { Link } from 'react-router-dom';

import Download from '../../../assets/images/download.svg';

import './HeroBox.scss';
import buttonStyles from '../../../styles/Buttons.module.scss';

const HeroBox = () => (
  <div className="herobox">
    <div className="herobox__content">
      <h1 className="heading__1 herobox__text-title">
        Soy
        {' '}
        <span className="herobox__text-title--name">Miguel Ruz.</span>
        <br />
        Diseñador UI
      </h1>
      <h5 className="heading__5">Este es mi Portafolio web!</h5>
    </div>
    <div className="herobox__button-container">
      <div className="herobox__button-left">
        <Link to="/projects" className={`${buttonStyles.button} ${buttonStyles.navigate}`}>Ver proyectos</Link>
      </div>
      <div className="herobox__button-right">
        <button
          className={`${buttonStyles.button} ${buttonStyles.action}`}
          onClick={() => alert('Descargar CV')}
        >
          <img
            src={Download}
            alt="download"
            className={`${buttonStyles.image} ${buttonStyles.imageLeft}`}
          />
          Descargar CV
        </button>
      </div>
    </div>
  </div>
);

export default HeroBox;
