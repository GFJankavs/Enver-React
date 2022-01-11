import project from '../../../assets/images/project.png';
import arrowRight from '../../../assets/images/arrow-right.svg';
import './Projects.scss';
import ButtonNavigate from '../Buttons/ButtonNavigate/ButtonNavigate';

const Projects = () => {
  console.log(123);
  return (
    <div className="projects">
      <h3 className="heading__3">Proyectos</h3>
      <div className="projects__container">
        <img className="project__image" src={project} alt="project_template" />
        <img className="project__image" src={project} alt="project_template" />
        <img className="project__image" src={project} alt="project_template" />
        <img className="project__image" src={project} alt="project_template" />
      </div>
      <div className="project__button-container">
        <div className="project__button-wrapper">
          <ButtonNavigate>
            Ver más en Behance
            <img className="button__image--right" src={arrowRight} alt="arrow_right" />
          </ButtonNavigate>
        </div>
      </div>
    </div>
  );
};

export default Projects;
