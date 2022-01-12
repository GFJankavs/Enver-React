import { Link } from 'react-router-dom';

import notFound from '../../assets/images/404.png';

import './NotFound.scss';
import buttonStyles from '../../styles/Buttons.module.scss';

const NotFound = () => (
  <div className="notfound">
    <img src={notFound} alt="404" />
    <h3 className="heading__3 notfound__heading">Lo sentimos, esta página no existe.</h3>
    <div className="notfound__button-container">
      <Link
        to="/"
        className={`${buttonStyles.button} ${buttonStyles.navigate}`}
      >
        A la página de inicio
      </Link>
    </div>
  </div>
);

export default NotFound;
