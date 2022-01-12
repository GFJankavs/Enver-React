import { Link } from 'react-router-dom';
import profile from '../../../assets/images/miguel.png';
import arrowRight from '../../../assets/images/arrow-right.svg';

import styles from './AboutMe.module.scss';
import buttonStyles from '../../../styles/Buttons.module.scss';

const AboutMe = () => (
  <div className={styles.about}>
    <div className={styles.content}>
      <img className={styles.left} src={profile} alt="miguel" />
      <div className={styles.right}>
        <h2 className="heading__2 margin-bottom--32">Acerca de mi</h2>
        <p className={`${styles.text} margin-bottom--32`}>
          Hola! mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo, me   crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
          <br />
          <br />
          En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.
        </p>
        <div>
          <div className={styles.buttonContainer}>
            <Link
              to="/about"
              className={`${buttonStyles.button} ${buttonStyles.action}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Mas acerca de mi
              <img
                className={`${buttonStyles.imageRight} ${buttonStyles.image}`}
                src={arrowRight}
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
