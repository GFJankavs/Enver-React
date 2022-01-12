import styles from './Projects.module.scss';
import project from '../../../assets/images/project.png';
import arrowRight from '../../../assets/images/arrow-right.svg';

import buttonStyles from '../../../styles/Buttons.module.scss';

const Projects = () => (
  <div className={styles.projects}>
    <h3 className="heading__3">Proyectos</h3>
    <div className={styles.container}>
      <img className={styles.image} src={project} alt="project_template" />
      <img className={styles.image} src={project} alt="project_template" />
      <img className={styles.image} src={project} alt="project_template" />
      <img className={styles.image} src={project} alt="project_template" />
    </div>
    <div className={styles.buttonContainer}>
      <div className={styles.buttonWrapper}>
        <a
          href="https://www.behance.net"
          target="_blank"
          rel="noreferrer"
          className={`${buttonStyles.button} ${buttonStyles.navigate}`}
        >
          Ver más en Behance
          <img
            className={`${buttonStyles.image} ${buttonStyles.imageRight}`}
            src={arrowRight}
            alt="arrow_right"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
