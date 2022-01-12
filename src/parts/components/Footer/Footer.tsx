import { Link } from 'react-router-dom';

import logo from '../../../logo.svg';
import Behance from '../../../assets/images/Behance.svg';
import LinkedIn from '../../../assets/images/Linkendl.svg';
import Figma from '../../../assets/images/Figma.svg';

import './Footer.scss';

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__top">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__menu">
          <Link
            to="/"
            className="footer__title"
            onClick={() => window.scrollTo(0, 0)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="footer__text footer__menu-item"
            onClick={() => window.scrollTo(0, 0)}
          >
            Acerca de mi
          </Link>
          <Link
            to="/projects"
            className="footer__text footer__menu-item"
            onClick={() => window.scrollTo(0, 0)}
          >
            Proyectos
          </Link>
        </div>
        <div className="footer__menu">
          <Link
            to="/contacts"
            className="footer__title"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contáctame
          </Link>
          <a
            href="mailto:miguelruz1126@gmail.com"
            className="footer__text footer__menu-item"
          >
            Correo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
            className="footer__text footer__menu-item"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer__social">
          <span className="footer__title">Social</span>
          <div className="footer__menu-item footer__social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.behance.net"
              className="footer__social-icon"
            >
              <img src={Behance} alt="behance_logo" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/"
              className="footer__social-icon"
            >
              <img src={LinkedIn} alt="linkedin_logo" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com"
              className="footer__social-icon"
            >
              <img src={Figma} alt="figma_logo" />
            </a>
          </div>
        </div>
      </div>
      <span className="footer__bottom">© 2021 Miguel Ruz </span>
    </footer>
  </>
);

export default Footer;
