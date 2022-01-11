import ButtonNavigate from '../Buttons/ButtonNavigate/ButtonNavigate';
import ButtonAction from '../Buttons/ButtonAction/ButtonAction';
import Download from '../../../assets/images/download.svg';
import './HeroBox.scss';

const HeroBox = () => {
  console.log(123);
  return (
    <div className="herobox">
      <div className="herobox__content">
        <div className="herobox__text-container">
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
            <ButtonNavigate>
              Ver proyectos
            </ButtonNavigate>
          </div>
          <div className="herobox__button-right">
            <ButtonAction>
              <img
                src={Download}
                alt="download"
                className="button__image"
              />
              Descargar CV
            </ButtonAction>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
