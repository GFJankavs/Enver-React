import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import logo from '../../../logo.svg';

const Header = () => (
  <>
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img src={logo} alt="logo" />
        <Navigation />
      </div>
    </header>
  </>
);

export default Header;
