import styles from './Projects.module.scss';
import project from '../../../assets/images/project.png';
import arrowRight from '../../../assets/images/arrow-right.svg';
import ButtonNavigate from '../Buttons/ButtonNavigate/ButtonNavigate';

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
        <ButtonNavigate>
          Ver más en Behance
          <img className="button__image--right" src={arrowRight} alt="arrow_right" />
        </ButtonNavigate>
      </div>
    </div>
  </div>
);

export default Projects;
