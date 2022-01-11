import profile from '../../../assets/images/miguel.png';
import arrowRight from '../../../assets/images/arrow-right.svg';
import './AboutMe.scss';
import ButtonAction from '../Buttons/ButtonAction/ButtonAction';

const AboutMe = () => {
  console.log(123);
  return (
    <div className="about">
      <div className="about__content">
        <img className="about__left" src={profile} alt="miguel" />
        <div className="about__right">
          <h2 className="heading__2 margin-bottom--32">Acerca de mi</h2>
          <p className="about__text margin-bottom--32">
            Hola! mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo, me   crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
            <br />
            <br />
            En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.
          </p>
          <div>
            <div className="about__button-container">
              <ButtonAction>
                Mas acerca de mi
                <img
                  className="button__image--right"
                  src={arrowRight}
                  alt="arrow"
                />
              </ButtonAction>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;