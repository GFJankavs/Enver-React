import { Link, NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';

import navigationTitles from '../../../data/navigationTitles';

import hamburger from '../../../assets/images/hamburger.svg';
import logo from '../../../logo.svg';
import close from '../../../assets/images/close.svg';

import './Navigation.scss';

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const params = useParams();
  return (
    <>
      <nav className="navigation">
        {navigationTitles.map(({ title, linkTo }) => (
          <NavLink
            to={linkTo}
            className={({ isActive }) => (
              isActive ? 'navigation__item navigation__item--active' : 'navigation__item'
            )}
          >
            {title}
          </NavLink>
        ))}
      </nav>
      <span
        className="navigation--hamburger-container"
        onClick={() => setHamburgerOpen(true)}
      >
        <img
          className="navigation--hamburger"
          src={hamburger}
          alt="hamburger_menu"
        />
      </span>
      <div className={hamburgerOpen ? 'navigation-hamburger navigation-hamburger--open' : 'navigation-hamburger'}>
        <div className="navigation-hamburger__content">
          <div className="navigation-hamburger__header">
            <img
              src={logo}
              alt="logo"
            />
            <span
              onClick={() => setHamburgerOpen(false)}
            >
              <img
                src={close}
                alt="close"
                className="navigation-hamburger__close"
              />
            </span>
          </div>
          <div className="navigation-hamburger__items">
            {navigationTitles.map(({ title, linkTo }) => (
              <div className="navigation-hamburger__item-container">
                <NavLink
                  to={linkTo}
                  className={({ isActive }) => (
                    isActive ? 'navigation-hamburger__item navigation-hamburger__item--active' : 'navigation-hamburger__item'
                  )}
                  onClick={() => setHamburgerOpen(false)}
                >
                  {title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
