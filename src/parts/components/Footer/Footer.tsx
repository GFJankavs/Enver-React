import './Footer.scss';
import logo from '../../../logo.svg';
import Behance from '../../../assets/images/Behance.svg';
import LinkedIn from '../../../assets/images/Linkendl.svg';
import Figma from '../../../assets/images/Figma.svg';

const Footer = () => {
  console.log(123);
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <img src={logo} alt="logo" className="footer__logo" />
          <div className="footer__menu">
            <span className="footer__title">Inicio</span>
            <span className="footer__text footer__menu-item">Acerca de mi</span>
            <span className="footer__text footer__menu-item">Proyectos</span>
          </div>
          <div className="footer__menu">
            <span className="footer__title">Contáctame</span>
            <span className="footer__text footer__menu-item">Correo</span>
            <span className="footer__text footer__menu-item">LinkedIn</span>
          </div>
          <div className="footer__social">
            <span className="footer__title">Social</span>
            <div className="footer__menu-item footer__social-icons">
              <button className="footer__social-icon">
                <img src={Behance} alt="behance_logo" />
              </button>
              <button className="footer__social-icon">
                <img src={LinkedIn} alt="linkedin_logo" />
              </button>
              <button className="footer__social-icon">
                <img src={Figma} alt="figma_logo" />
              </button>
            </div>
          </div>
        </div>
        <span className="footer__bottom">© 2021 Miguel Ruz </span>
      </footer>
    </>
  );
};

export default Footer;
